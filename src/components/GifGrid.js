import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGif';
import GifGridItem from './GifGridItem';

const GifGrid = ({valor}) => {
    const [images, setImages] = useState([])
    
    // const [count, setCount] = useState(0);
    useEffect(()=>{ //Si no se usa el useEffect cada que se ejecuta incrementar boton se renderiza toda la pantalla, si se usa se renderiza la funcion(es) especifica una sola vez y las demas siguen renderizandose  
        getGif(valor)
            .then(setImages);
        // console.log(images)
    },[valor]);
    
    // Ha y tiene un segundo parametro que sería la 
    // lista de parámetros de los que depende el efecto y, lo que indica, es que 
    // cuando estos parámetros no cambien entonces no volverá a renderizar el efecto.


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
