import { useSelector } from "react-redux";
import "./App.css";
import TodoLIst from "./components/TodoLIst";

function App() {
  const state = useSelector((state) => ({ ...state }));
  console.log("state", state);
  return (
    <div className="App">
      <TodoLIst />
    </div>
  );
}

export default App;
