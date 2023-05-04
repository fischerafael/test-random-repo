import { IUseFetchPokemon } from "./hooks";

interface PageDependencyInjectionProps {
  useGetPokemon: IUseFetchPokemon;
}

export const PageDependencyInjection = ({
  useGetPokemon,
}: PageDependencyInjectionProps) => {
  const { pokemons } = useGetPokemon();

  return (
    <div>
      {pokemons.map((poke) => (
        <li key={poke.name}>{poke.name}</li>
      ))}
    </div>
  );
};
