import { setPokemons, startLoadingPokemons } from "./pokemonSlice"
import { pokemonApi } from "../../api/pokemonApi"

export const getPokemons = (page = 0) => {
    return async( dispatch, getState ) => {   // Funcion que regresa una tarea asyncrona y cuando se resuelva podra ejecutar las diferentes acciones
        // Aqui abajo ponemos nuestra aplicacion en modo de cargar ahora la peticion http con Axios
        dispatch(startLoadingPokemons())

        // TODO : realizar peticion http

        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=0${ page * 10 }`)

        dispatch(setPokemons({ pokemons: data.results, page: page + 1}))
/*         dispatch(setPokemons({ pokemons: data.results, pagePrev: page - 1})) */
    }
}