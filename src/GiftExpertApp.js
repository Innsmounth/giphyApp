import React, { useState } from 'react';
import  {AddCategory}  from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GiftExpertApp = () => {
    console.log('Inicia la aplicacion -->')

const [categoria, setCategoria] = useState(['One Punch Man']);


// const handleAdd = () =>{
//     // setCategoria([...categoria,'Hunter'])
//     setCategoria((cat2)=>['HunterxHunter'])
// }

    return(
        <>
            <h2>GiftExpertAPP</h2>
            <AddCategory setCategoria = {setCategoria}/>
            <hr />
            {/* <button onClick = {handleAdd}>Agragar algo</button> */}
                <ol>
                    {
                        // categoria.map(valor => <li key={valor}>{valor}</li>)
                        categoria.map(valor => (
                            <GifGrid 
                                key = {valor}
                                valor = {valor}
                            />
                        ))
                    }
                </ol>
        </>
    );
}


export {
    GiftExpertApp as default
}
