import "./App.css";
import { Select } from "./components/Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Three", value: 3 },
  { label: "Four", value: 4 },
  { label: "Five", value: 5 },
];

function App() {
  return (
    <>
      <Select options={options} />
    </>
  );
}

export default App;
