import { useState } from "react";
import "./App.css";
import { Select, SelectOption } from "./components/Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Three", value: 3 },
  { label: "Four", value: 4 },
  { label: "Five", value: 5 },
];

function App() {
  const [value, setValue] = useState<SelectOption[]>([options[0]]);
  return (
    <>
      <Select
        multiple
        options={options}
        value={value}
        onChange={(o) => setValue(o)}
      />
    </>
  );
}

export default App;
