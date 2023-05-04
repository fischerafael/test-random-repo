import { PageDependencyInjection } from "./pages/DependencyInjection";
import {
  useFetchPokemon,
  useFetchPokemonInMemory,
} from "./pages/DependencyInjection/hooks";

function App() {
  return <PageDependencyInjection useGetPokemon={useFetchPokemonInMemory} />;
}

export default App;
