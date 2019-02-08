import request from 'superagent'
const url ='http://localhost:3000/api/v1/feelings'
const pokeapiUrl = 'https://pokeapi.co/api/v2'

export function getPokemons () {
  return request
}

export function getFeels () {
  return request.get(url).then(res => res.body)
}
