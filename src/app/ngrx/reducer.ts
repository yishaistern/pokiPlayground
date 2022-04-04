import { Action, createReducer, on, State } from "@ngrx/store";
import { AppState } from "../models/state";
import * as actions from './actions';
export const initialState: AppState = {
        list: {
            loaded: false,
            loading: false,
            pokemons: [],
         },
         favorites: [],
         cardOpen: false,
         card: {
           loaded: false,
           loading: false,
           pokemon: null,
         },
  };


  export const _pokemonsReducer = createReducer(
    initialState,
    on(actions.getfavoritesSuccess, (state, { list }) => {
      return { ...state,  favorites: list }
    }),
    on(actions.getPokemonList, (state) => ({ ...state, list: { loaded: false, loading: true, pokemons: []} })),
    on(actions.getPokemonListSuccess, (state, {list}) => ({ ...state, list: { loaded: true, loading: false, pokemons: list} })),
    on(actions.openCard, (state) => (
      {...state, cardOpen: true, card: { ...state.card, loading: true, loaded: false}}
    )),
    on(actions.pokemonInfo, (state, { pokemon }) => (
      {...state, card: { ...state.card, loading: false, loaded: true, pokemon}}
    )),
    on(actions.closeCard, (state) => (
      {...state, cardOpen: false, card: { loaded: false, loading: false, pokemon: null}}
    )),
  );
