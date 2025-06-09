import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonSectionComponent } from 'src/app/shared/components/ui/common-section/common-section.component';
import { PreviewCardComponent } from 'src/app/shared/components/ui/preview-card/preview-card.component';
// FIX: Use relative path and ensure tsconfig has "resolveJsonModule": true and "esModuleInterop": true
import MYNFT from '../../../../../assets/abis/MYNFT.json';
import { environment } from 'src/environments/environment';
import { ethers } from 'ethers';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, CommonSectionComponent, PreviewCardComponent],
})
export class CreatePage implements OnInit {
  readonly CONTRACT_ADDRESS = "0x4Fd4014d8AfCEC9836529195C43D244251bE6B14";
  // Static preview data (unchanged)
  previewData = {
    id: '01',
    title: 'Guard',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imgUrl: 'assets/images/Image-not-found.png', // Default image
    creator: 'Trista Francis',
    creatorImg: 'assets/images/ava-01.png',
    currentBid: 7.89,
  };

  // Reactive form data (user input)
  formData = {
    price: '',
    minBid: '',
    startDate: '',
    expDate: '',
    title: '',
    description: '',
    imgUrl: '',
  };

  // Computed property to merge previewData with formData dynamically
  get item() {
    return {
      ...this.previewData, // Keep default data
      title: this.formData.title || this.previewData.title, // Use formData if available
      desc: this.formData.description || this.previewData.desc,
      imgUrl: this.formData.imgUrl || this.previewData.imgUrl, // Default image if none uploaded
      currentBid: this.formData.price || this.previewData.currentBid, // Use price if entered
    };
  }

  ngOnInit() {
    // Initialize the formData imgUrl with the default image URL
    this.formData.imgUrl = this.previewData.imgUrl;

    // Fetch user info for preview
    const userID = localStorage.getItem('userID');
    if (userID) {
      fetch(`http://localhost:3000/api/users/${userID}`)
        .then(res => res.json())
        .then(user => {
          // Update previewData with user info
          this.previewData.creator = user.userName || 'Unknown';
          console.log('User data:', user);
          this.previewData.creatorImg = user.image
            ? `http://localhost:3000/uploads/profiles/${user.image}` // or your actual image URL logic
            : 'assets/images/ava-01.png';
        })
        .catch(() => {
          this.previewData.creator = 'Unknown';
          this.previewData.creatorImg = 'assets/images/ava-01.png';
        });
    }else{
      console.warn('No user ID found in localStorage');
      this.previewData.creator = 'Unknown';
      this.previewData.creatorImg = 'assets/images/ava-01.png';
    }
  }

  // Method to update the item image URL reactively
  updateImageUrl(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.formData.imgUrl = e.target.result;
        this.previewData.imgUrl = this.formData.imgUrl;
      };
      reader.readAsDataURL(file);
    }
  }

  async createItem() {
    try {
      // 1. Get the current user's ID (from localStorage, service, etc.)
      const userID = localStorage.getItem('userID');
      if (!userID) {
        alert('User not logged in');
        return;
      }

      // 2. Fetch user info from backend
      const userRes = await fetch(`http://localhost:3000/api/users/${userID}`);
      console.log('User response:', userRes);
      if (!userRes.ok) {
        alert('Failed to fetch user info');
        return;
      }
      const user = await userRes.json();

      // 3. Get the file from the input
      const fileInput = document.querySelector('#imgUrl') as HTMLInputElement;
      const file = fileInput.files?.[0];
      if (!file) return alert('No image selected');

      // 4. Upload to Pinata using the HTTP API
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${environment.pinataJWT}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Upload to Pinata failed');
      const result = await response.json();
      const ipfsUrl = `ipfs://${result.IpfsHash}`;



      console.log('✅ Uploaded to IPFS via Pinata:', ipfsUrl);

      // 5. Connect MetaMask
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();

      // 6. Mint NFT
      const contract = new ethers.Contract(this.CONTRACT_ADDRESS, MYNFT, signer);
      const tx = await contract['mint'](ipfsUrl);
      await tx.wait();

      console.log('✅ NFT Minted:', tx.hash);

      // 7. Save NFT to backend database
      const nftData = {
        UserId: userID,
        title: this.formData.title,
        description: this.formData.description,
        price: this.formData.price,
        image: ipfsUrl,
        ownerName: user.userName,
        ownerPfp: user.image
          ? `http://localhost:3000/uploads/profiles/${user.image}`
          : 'assets/images/ava-01.png',
        walletAddress: await signer.getAddress(),
        txHash: tx.hash,
      };

      const saveRes = await fetch('http://localhost:3000/api/nft/nfts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nftData),
      });

      if (!saveRes.ok) throw new Error('Failed to save NFT to backend');
      console.log('✅ NFT saved to backend!');
      alert('NFT minted and saved successfully!');
    } catch (err) {
      console.error('❌ Error creating item:', err);
      alert('Failed to create item.');
    }
  }
}
