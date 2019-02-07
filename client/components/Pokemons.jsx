import React from 'react'

export default function Pokemons (props) {
  return (
    <div>
      <ul>
        {props.pokemons.map(pokemon =>
            <li key={pokemon.name}>{pokemon.name}</li>
        )}
      </ul>
    </div>
  )
}
