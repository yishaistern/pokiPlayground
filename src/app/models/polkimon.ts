export interface Pokimon {
    name: string;
    path: string;
}

export interface favoritesPokimon extends Pokimon {
    timeStamp: number;
    indexInDataSet: number;
}