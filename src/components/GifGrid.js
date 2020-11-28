import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ({valor}) => {
    const [images, setImages] = useState([])
    
    // const [count, setCount] = useState(0);


    useEffect(()=>{ //Si no se usa el useEffect cada que se ejecuta incrementar boton se renderiza toda la pantalla, si se usa se renderiza la funcion(es) especifica una sola vez y las demas siguen renderizandose  
        getGif();
        // console.log(images)
    },[]);

    const getGif = async() =>{
        
        const url = `http://api.giphy.com/v1/gifs/search?api_key=xTEP09ggxEaxyFAAnogp9Pt441VOS2XS&q=${encodeURI(valor)}&limit=5`
        const response =  await fetch(url)
        const {data} = await response.json();
        // console.log(data.data)
        const gifs = data.map( img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.original.url
            }
        });
        setImages(gifs)
    }

    return (       
        <>
        <h2>{valor}</h2>   
            <div className="card-grid">
                    {images.map(img => (
                    <GifGridItem 
                        // img = {img}
                        {...img}//Es una forma de enviar las propiedades de  img de forma independiente, cuado se resive en el componente para extraer la //! url seria props.url o se puede destructurar {url} console.log(url)
                        key = {img.id}
                    />))}
                {/* <h3>{count}</h3> */}
                {/* <button onClick={()=> setCount(count + 1)} >Incrementar</button> */}
            </div>
        </>
    )
}

export default GifGrid
