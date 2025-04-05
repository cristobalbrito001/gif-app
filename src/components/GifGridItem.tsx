import { gif } from '../interfaces/gif'
import React from 'react'
const GifItem =({images  ,title}:gif) =>{
    console.log(images)
    return(
        <div className="card">
            <img src={images.original.url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
export{
    GifItem
}