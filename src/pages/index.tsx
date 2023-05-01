import { useEffect, useState } from "react";

interface IPokemonBackend {
  name: string;
  url: string;
}

interface IPokemonFrontend {}

interface IPokemonResponse {
  count: number;
  results: IPokemonBackend[];
}

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<IPokemonBackend[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = (await res.json()) as IPokemonResponse;
      setPokemons(data.results);
    })();
  }, []);

  return (
    <div>
      <ul>
        {pokemons.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
};
