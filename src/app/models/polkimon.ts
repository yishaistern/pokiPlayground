export interface Pokimon {
    name: string;
    url: string;
}

export interface favoritesPokimon extends Pokimon {
    timeStamp: number;
    indexInDataSet: number;
}