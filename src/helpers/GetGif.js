


const GetGif = async(search)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(search)}&limit=15&api_key=5sXSD6t7Lzmt8MtJZ8AHIdKrbviqeSG4`;

    const res = await fetch(url);
    const {data} = await res.json();

    const gif = data.map(img => {
        return{
            id:img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gif;
}

export default GetGif;