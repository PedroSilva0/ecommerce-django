import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to my dummy project</h1>
          <p>
            <i className="fas fa-shopping-cart">Algo</i>
            Something
          </p>
          <h1>Theres something int he middle</h1>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
