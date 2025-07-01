import { PokeData } from "./type";
const END_POINT = 'https://pokeapi.co/api/v2/pokemon/3';


async function fetchData():Promise<PokeData>{
    const response = await fetch(END_POINT)
    const data = await response.json();
    return data;
}

fetchData();