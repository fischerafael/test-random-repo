import React, { useEffect, useState } from "react";

export const PageIIFE = () => {
  const [pokeData, setPokeData] = useState<{ name: string }[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokeData(data.results);
    })();
  }, []);

  return (
    <div>
      {pokeData &&
        pokeData.map((pokemon) => <p key={pokemon.name}>{pokemon.name}</p>)}
    </div>
  );
};
