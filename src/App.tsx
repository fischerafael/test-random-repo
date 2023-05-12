import { PageDependencyInjection } from "./pages/DependencyInjection";
import {
  useFetchPokemon,
  useFetchPokemonInMemory,
} from "./pages/DependencyInjection/hooks";
import { PageIIFE } from "./pages/iife";

function App() {
  return <PageIIFE />;
}

export default App;
