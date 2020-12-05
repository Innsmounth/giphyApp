import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif"


export const useFetchGif= (valor) =>{

    const [state, setState] = useState({
        data :[],
        loading: true
    })

    useEffect(()=>{
        getGif(valor)
        .then(img => {
            setTimeout(() => {
                setState({
                data: img,
                loading:false
                })
            }, 3000);
        })
        
    },[valor])

    return state //actual sin modificaion data = [] y loading = true

}