import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './features/pokemon/thunks'

function PokemonApp() {
  // Crea mi dispatch function que usare para disparar o despachar cualquier accion
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch( getPokemons() )
  }, [])

  return (
    <>
    <h1>
        Pokemon
    </h1>
    <ul>
        <li>PokeLi</li>
        <li>PokeLi</li>
        <li>PokeLi</li>
    </ul>
        </>
  )
}

export default PokemonApp