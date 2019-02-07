import request from 'superagent'

const pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon-form/'

export function getPokemons () {
  return request
    .get(pokeapiUrl)
    .then(res => {
      return res.body.results
    })
}

export default getPokemons
