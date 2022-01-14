export const getGifs = async (category) => {
        const pokemondbIUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ttUCMBjcxlYsPn98nGlTl6o2UYExpEdD`
        const resp = await fetch(pokemondbIUrl)
        const { data } = await resp.json()

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return (gifs)

    }