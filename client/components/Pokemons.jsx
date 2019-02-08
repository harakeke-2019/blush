import React from 'react'

export default function Pokemons (props) {
  return (
    <div>
      <div className="api" key={props.pokemon.name}>
        {props.pokemon.name}<br/>
        <img src={props.pokemon.image}></img>
      </div>
    </div>
  )
}
