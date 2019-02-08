import React from 'react'

export default function Pokemons (props) {
  return (
    <div>
      <ul>
        <div key={props.pokemon.name}>
          {props.pokemon.name}<br/>
          <img src={props.pokemon.image}></img>
        </div>
      </ul>
    </div>
  )
}
