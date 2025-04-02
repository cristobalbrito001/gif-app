interface OriginalImage {
    url: string;
  }
  
  interface ImageType {
    original: OriginalImage;
  }
  
  interface gif {
    id: string;
    images: ImageType;
    title: string;
  }
export type{
    gif
}