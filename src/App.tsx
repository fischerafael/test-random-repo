import { RecoilRoot } from "recoil";
import { States } from "./pages/States";
import { useRecoilStates } from "./pages/States/hook";

function App() {
  return (
    <RecoilRoot>
      <States useStateManagement={useRecoilStates} />
    </RecoilRoot>
  );
}

export default App;
