import { useEffect, useState } from "react";
import { getGifs, GifImage } from "../helpers/getGif";

const useFetchGif = (categorie:string) =>{

    const [images,setimages] = useState<GifImage[]>([]) 
    const [isLoading, setIsloading] = useState(true)
    const getImages = async () => {
        const newImages: GifImage[] = await getGifs(categorie);
        setimages(newImages);
        setIsloading(false)
   };
     useEffect( () =>{
         getImages()
     }, [] )


    return{ 
        images,
        isLoading
    }
}

export{
    useFetchGif
}