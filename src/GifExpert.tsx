import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


const GifExpertApp=() =>{
    const [ categories, setCategories ] = useState(['Bleach'])

    const onAddCategory= (newCategory:string) =>{
        if (categories.filter(x => x.toUpperCase().trim() === newCategory.toUpperCase().trim()).length === 0) {
            setCategories(prevCategories => [newCategory,...prevCategories ]);
        } else {
           return
        }
    }
    return(
        <>
           <h1> GitExpert </h1>
           <AddCategory 
                onNewCategorie = { onAddCategory }
            />
                {
                    categories.map(categorie =>
                        (
                            <GifGrid 
                                category={categorie} 
                                key={categorie}
                            />
                        )
                
                )}
          
        </>
        )
}

export{
    GifExpertApp
}