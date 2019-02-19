import request from 'superagent'

const pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon-form'

export function getPokemons (id) {
  return request
    .get(`${pokeapiUrl}/${id}`)
    .then(res => {
      return {
        name: res.body.name,
        imageFront: res.body.sprites.front_default,
        imageFrontShiny: res.body.sprites.front_shiny,
        imageBack: res.body.sprites.back_default,
        imageBackShiny: res.body.sprites.back_shiny
      }
    })
}

export function getAbility(id) {
  return request.get(url).then(res => res.body)
}
export default getPokemons
