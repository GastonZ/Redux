import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './features/pokemon/thunks'

function PokemonApp() {
  // Crea mi dispatch function que usare para disparar o despachar cualquier accion
  const dispatch = useDispatch()
  const { isLoading, pokemons = [] , page } = useSelector( state => state.pokemons )

  useEffect(()=> {
    dispatch( getPokemons() )
  }, [])

  return (
    <>
    <h1>
        PokemonApp
    </h1>
    <span> Loading: { isLoading ? 'True' : 'False'} </span>
    <ul>
      {
        pokemons.map(( {name} )=> (
          <li key={name}>{name}</li>
        ))
      }
    </ul>
    <button disabled={ isLoading }
    onClick={ ()=> dispatch( getPokemons(page) ) }>
      Next
    </button>
        </>
  )
}

export default PokemonApp