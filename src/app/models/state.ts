import { favoritesPokimon, Pokimon } from "./polkimon";

export interface AppState {
        card: any;
        favorites: favoritesPokimon[];
        cardOpen: boolean;
        list: {
            loading: boolean,
            loaded: boolean,
            pokimons: Pokimon[],
        }
}