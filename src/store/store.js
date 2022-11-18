// Sacado de la documentacion, asi crea el store

import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../features/counter/CounterSlice'
import { pokemonSlice } from '../features/pokemon/pokemonSlice'


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer
  },
})
