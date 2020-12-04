import { useState } from "react"


export const useFetchGif= () =>{

    const [state, setState] = useState({
        data :[],
        loading: true
    })

    setTimeout(() => {
        setState({
            data:[1,2,3,4,5,6],
            loading:false
        })
    },3000)


    return state //actual sin modificaion data = [] y loading = true


}