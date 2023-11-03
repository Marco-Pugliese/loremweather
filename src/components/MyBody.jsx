import { Col, Container, Form, Row } from "react-bootstrap";
import HomeDetail from "./HomeDetail";

const MyBody = () => {
  return (
    <Container className=" w-50 text-center d-flex align-items-center justify-content-center rounded h-100">
      <Row
        className=" text-focus-in display-4 text-white fw-bold align-items-center w-100"
        id="title"
      >
        <Col md={6}>
          <Form.Control
            className="bg-transparent shadow border border-black"
            placeholder="choose a city"
            id="inputField"
          />
        </Col>
        <Col md={6}>
          <HomeDetail className="bg" />
        </Col>
      </Row>
    </Container>
  );
};
export default MyBody;
