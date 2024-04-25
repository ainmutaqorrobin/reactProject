import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  return (
    <main>
      <Container as={Button} onClick={() => {}}>
        Click Me!
      </Container>
    </main>
  );
}

export default App;
