export const getGif = async(valor) =>{
        
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
        return gifs;
    }