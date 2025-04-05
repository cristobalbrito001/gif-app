import React,{ useState,FC, FormEvent, ChangeEvent }   from "react";

interface AddCategoryProps {
    onNewCategorie: (category: string) => void;
  }
const AddCategory :FC<AddCategoryProps> = ({onNewCategorie})=>{

    const [inputValue,setInputValue] = useState('')
    const onInputChange = (event:ChangeEvent<HTMLInputElement>) =>{
        const newCategorie = event.target.value
        setInputValue(newCategorie)
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(inputValue.trim().length  === 0){
            return
        }
        onNewCategorie(inputValue);
        setInputValue('')
    }
   return( 
    <form onSubmit={  onSubmit } aria-label="form">
        <h3>
            <input
                type="text"
                placeholder="buscar..."
                value={inputValue}
                onChange={ onInputChange }
            />
        </h3>
    </form>
    )
}

export{
    AddCategory
}