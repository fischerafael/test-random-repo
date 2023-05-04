import { useEffect, useState } from "react";

export const useFetchPokemon: IUseFetchPokemon = () => {
  const [pokemons, setPokemons] = useState<{ name: string }[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
      const data = await res.json();

      setPokemons(data?.results);
    })();
  }, []);
  return { pokemons };
};

export const useFetchPokemonInMemory: IUseFetchPokemon = () => {
  const pokemons = [{ name: "Crazy Poke" }, { name: "Random" }];

  return { pokemons };
};

export interface IUseFetchPokemon {
  (): {
    pokemons: {
      name: string;
    }[];
  };
}
