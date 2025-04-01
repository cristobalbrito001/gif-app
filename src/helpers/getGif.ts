
interface GifImage {
  id: string;
  images: {
    original: {
      url: string;
    };
  };
  title: string;
}

// Define the response type from the API
interface GifApiResponse {
  data: GifImage[];
}

const getGifs = async (category: string): Promise<GifImage[]> => {
  const Url = `http://api.giphy.com/v1/gifs/search?api_key=WTSJx6f4d6gfal8TRKVDYtd6jjmHJk0X&q=${category}&limit=20`;
  const response = await fetch(Url);
  const { data }: GifApiResponse = await response.json();

  // Return the correct shape of objects matching the GifImage type
  const gifs = data.map((img) => ({
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
export type { GifImage };