const GifItem =({images,title, id}) =>{
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