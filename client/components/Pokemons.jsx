import React from 'react'

export default function Pokemons (props) {
  return (
    <div>
      <div className="api" key={props.pokemon.name}>
        {props.pokemon.name}<br/>
        <img src={props.pokemon.imageFront}></img>
        <img src={props.pokemon.imageBack}></img>
        <img src={props.pokemon.imageFrontShiny}></img> }
        <img src={props.pokemon.imageBackShiny}></img>
      </div>
    </div>
  )
}
