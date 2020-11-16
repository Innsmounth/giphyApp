import React, { useState } from 'react';

// const categoria = ['One Punch Man','Samurai X', 'Dragon Ball'];



const GifExpertApp = () => {

const [categoria, setCategoria] = useState(['One Punch Man','Samurai X', 'Dragon Ball']);

const handleAdd = () =>{
    // setCategoria([...categoria,'Hunter'])
    setCategoria((cat2)=>['HunterxHunter','otro',...categoria])
}


    
    return(
        <>
            <h2>GiftExpertAPP</h2>
            <hr />
            <button onClick = {handleAdd}>Agragar algo</button>
                <ol>
                    {
                        categoria.map(valor => <li key={valor}>{valor}</li>)
                    }
                </ol>
        </>
    );
}

export {
    GifExpertApp as default
}
