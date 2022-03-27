export interface Pokemon {
    name: string;
    url: string;
}

export interface favoritesPokemon extends Pokemon {
    timeStamp: number;
    indexInDataSet: number;
}