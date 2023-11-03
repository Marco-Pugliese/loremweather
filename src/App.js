import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MyHeader from "./components/MyHeader";
import MyBody from "./components/MyBody";
import MyFooter from "./components/MyFooter";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="d-flex flex-column h-100 z-1position-absolute bg">
        <MyHeader />
        <Container fluid className="flex-grow-1">
          <MyBody />
        </Container>
        <MyFooter />
      </div>
    </>
  );
}

export default App;
