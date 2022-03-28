import { favoritesPokemon, Pokemon } from "./polkimon";

export interface AppState {
        card: {
            loading: boolean,
            loaded: boolean,
            pokemon: any,
        };
        favorites: favoritesPokemon[];
        cardOpen: boolean;
        list: {
            loading: boolean,
            loaded: boolean,
            pokemons: Pokemon[],
        }
}