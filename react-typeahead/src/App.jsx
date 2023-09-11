import { useState } from "react";

import "./App.css";
import SearchBox from "./components/SearchBox";
import ItemsList from "./components/ItemsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        {/* list of props that can be accepted by the searchbox*/}
        <SearchBox
          id="person-name"
          name="person-name"
          label="Enter person name"
          placeholder="Enter your fav star war char"
          autoComplete={true}
          maxItems={5}
          style={{
            label: "",
            input: "",
          }}
          debounceWait={400}
          listBox={(items) => <ItemsList items={items} />}
          noItemMsg={() => <div>Sorry no person found</div>}
          errorMsg={() => <div>Something went wrong</div>}
        />
      </div>
    </>
  );
}

export default App;
