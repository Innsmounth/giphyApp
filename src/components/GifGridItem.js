import React from 'react'

const GifGridItem = ({id,title,url}) => {
    // console.log(img.img,'<--img')
    // console.log(img.img.id,'<--id')
    console.log(id)
    return (
        <div className="card" >
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem;