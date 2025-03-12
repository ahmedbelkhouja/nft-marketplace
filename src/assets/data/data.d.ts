declare module 'src/assets/data/data.js' {
  export interface NftData {
    id: string;
    title: string;
    desc: string;
    imgUrl: string;
    creator: string;
    creatorImg: string;
    currentBid: number;
  }
  interface SellerData {
    id: string;
    desc: string;
    sellerName: string;
    sellerImg: string;
    currentBid: number;
    fbUrl: string;
    instaUrl: string;
    twitUrl: string;
  }

  export const NFT__DATA: NftData[];
  export const SELLER__DATA: SellerData[];
}