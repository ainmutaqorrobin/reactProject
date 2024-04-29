import { Demo } from "./components/List";
import { Demo as Demo2 } from "./components/Icon";
import Input from "./components/input";
import { useRef } from "react";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input label="test" ref={input} />
    </main>
  );
}

export default App;
