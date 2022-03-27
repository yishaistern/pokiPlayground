import { favoritesPokemon, Pokemon } from "./polkimon";

export interface AppState {
        card: any;
        favorites: favoritesPokemon[];
        cardOpen: boolean;
        list: {
            loading: boolean,
            loaded: boolean,
            pokemons: Pokemon[],
        }
}