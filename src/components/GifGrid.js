import React /* , { useEffect, useState } */ from 'react'
import { useFetchGif } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({valor}) => { //usado en GiftExpertApp
    const {loading,data:images} = useFetchGif(valor);
    console.log(images, '<---- ID IMAGEN')
    
    return (       
        <>
        <h2>{valor}</h2>   
        {loading && <p className='animate__animated animate__bounce'>Cargando</p>}
            {<div className="card-grid">
                    {images.map(img => (
                    <GifGridItem 
                        // img = {img}
                        {...img}//Es una forma de enviar las propiedades de  img de forma independiente, cuado se resive en el componente para extraer la //! url seria props.url o se puede destructurar {url} console.log(url)
                        key = {img.id}
                    />))}
            </div>}
        </>
    )
}

export default GifGrid
