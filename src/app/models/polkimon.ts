export interface Pokimon {
    name: string;
    path: string;
}

export interface CartPokimon extends Pokimon {
    timeStamp: number;
}