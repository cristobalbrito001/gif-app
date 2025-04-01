import React from 'react'
import Swal from 'sweetalert2';
import { GifItem } from './GifGridItem';
import { useFetchGif } from '../hooks/useFetchGif'

interface GifGridProps {
    category: string;
  }

const GifGrid: React.FC<GifGridProps> = ( { category }) =>{

    const {images, isLoading} = useFetchGif( category )

    if (!isLoading && images.length > 0) { 
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'desfruta tus gif bro',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
    }
    if(images.length < 1){
        Swal.fire({
            title: "no hay imagenes",
            text: "wtf",
            icon: "error"
          });
    }
    return(
        <>
            <h3> {category} </h3>
            <div className='card-grid'>
                {images.map((image) => (
                   <GifItem key={image.id} {...image}/>
                ))}
            </div>
        </>
    )
}

export{
    GifGrid
}