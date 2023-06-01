import { PageDependencyInjection } from "./pages/DependencyInjection";
import {
  useFetchPokemon,
  useFetchPokemonInMemory,
} from "./pages/DependencyInjection/hooks";
import { MapPage } from "./pages/Map";
import { PageIIFE } from "./pages/iife";

function App() {
  return <MapPage />;
}

export default App;
