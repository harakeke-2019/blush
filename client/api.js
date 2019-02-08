import request from 'superagent'

const url = 'http://localhost:3000/api/v1/feelings'

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

export function getFeels () {
  return request.get(url).then(res => res.body)
}
export default getPokemons
