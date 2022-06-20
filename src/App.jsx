import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, ListGroup, ListGroupItem } from "reactstrap";
import { React, useState } from "react";

function App() {
  const [click, setClick] = useState(0);

  const Incrementar = () => {
    setClick(click + 1);
  };
  const Decrementar = () => {
    setClick(click - 1);
  };
  const Reiniciar = () => {
    setClick(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Aquí comenzaremos con la práctica número 1 de{" "}
          <strong>React en Vite</strong>
        </h1>
        <br />
        <Container fluid="sm">
          <ListGroup>
            <ListGroupItem color="info">{click}</ListGroupItem>
          </ListGroup>
          <br />
          <div className="Buttons">
            <Button color="danger" onClick={Incrementar} className="button">
              Incrementar
            </Button>
            <Button color="secondary" onClick={Decrementar} className="button">
              Decrementar
            </Button>
            <Button color="warning" onClick={Reiniciar} className="button">
              Reiniciar
            </Button>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;
