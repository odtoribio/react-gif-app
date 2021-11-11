export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&api_key=M6oSBiGSXohVqIz2oj8wIlGHja3FjjLZ`
  const response = await fetch(url);
  const { data } = await response.json();
  
  const gifs = data.map( gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url
    }
  })

  return gifs;
}
