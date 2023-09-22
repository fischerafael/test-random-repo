import { RecoilRoot } from "recoil";
import { States } from "./pages/States";
import { useRecoilStates } from "./pages/States/hook";
import { FilterSpecialChars } from "./pages/FilterSpecialChars";

function App() {
  return <FilterSpecialChars />;
  return (
    <RecoilRoot>
      <States useStateManagement={useRecoilStates} />
    </RecoilRoot>
  );
}

export default App;
