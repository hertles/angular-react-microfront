import { useState } from "react";
import RemoteLogo from "remote/RemoteLogo";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <RemoteLogo
        value={count}
        onCounterClick={() => setCount((prevCount) => (prevCount += 1))}
      />
    </main>
  );
}

export default App;
