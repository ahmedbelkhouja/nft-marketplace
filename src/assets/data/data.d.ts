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

  export const NFT__DATA: NftData[];
}