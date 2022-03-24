import { Action, createReducer, on, State } from "@ngrx/store";
import { AppState } from "../models/state";
import * as actions from './actions';
export const initialState: AppState = {
        list: {
            loaded: false,
            loading: false,
            pokimons: [],
         },
         favorites: [],
         cardOpen: false,
         card: null,
  };


  export const _pokimonsReducer = createReducer(
    initialState,
    on(actions.getfavoritesSuccess, (state, {list}) => ({ ...state, favorites: list })),
    on(actions.getPokimonList, (state) => ({ ...state, list: { loaded: false, loading: true, pokimons: []} })),
    on(actions.getPokimonListSuccess, (state, {list}) => ({ ...state, list: { loaded: true, loading: false, pokimons: list} })),
  );

  export function pokimonsReducer(state: any, action:any) {
    return _pokimonsReducer(state, action);
  }

  export const scoreboardReducer = createReducer(
    initialState,
  );