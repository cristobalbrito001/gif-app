import 'whatwg-fetch' 
interface GifImage {
  id: string;
  images: {
    original: {
      url: string;
    };
  };
  title: string;
}


interface GifApiResponse {
  data: GifImage[];
}

const getGifs = async (category: string): Promise<GifImage[]> => {
  const Url = `https://api.giphy.com/v1/gifs/search?api_key=WTSJx6f4d6gfal8TRKVDYtd6jjmHJk0X&q=${category}&limit=20`;
  const response = await fetch(Url);
  const { data }: GifApiResponse = await response.json();


  const gifs: GifImage[] = data.map((img) => ({
    id: img.id,
    images: {
      original: {
        url: img.images.original.url,
      },
    },
    title: img.title,
  }));

  return gifs;
};

export { getGifs };
export type { GifImage, GifApiResponse };