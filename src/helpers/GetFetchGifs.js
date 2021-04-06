
  //PETICIÓN HTTP
export const getFetchGifs = async(category) => {

    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=rCwpFMVWw4DDuxWmSqeeaaNzp3MBMpC3`;
    const resp = await fetch(url);
    //Interesa la data.data
    const {data} = await resp.json();

    const gif = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    }) 

    // console.log('gif',gif);
    // setImages(gif);

    return gif;
}
