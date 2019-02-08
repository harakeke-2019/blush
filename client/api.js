import request from 'superagent'

const pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon-form'

export function getPokemons (id) {
  return request
    .get(`${pokeapiUrl}/${id}`)
    .then(res => {
      return {
        name: res.body.name,
        image: res.body.sprites.front_default
      }  
    })
}

export default getPokemons
