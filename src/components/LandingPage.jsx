import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MyBodyHeader from "./MyBodyHeader";
import HomeDetailUp from "./HomeDetailUp";
import { useState } from "react";
import HomeDetailDown from "./HomeDetailDown";

const LandingPage = () => {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("Roma");

  return (
    <Container className=" text-center d-flex align-items-center justify-content-center rounded h-100 my-4">
      <Row
        className=" text-focus-in border border-black bg-2 rounded z-1 display-4 text-white fw-bold w-100"
        id="title"
      >
        <Col className="col-12">
          <MyBodyHeader />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <div className="d-flex mt-4">
            <Form.Control
              className="bg-transparent shadow border border-black"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              placeholder="choose a city"
              id="inputField"
            />
            <Button
              id="btn"
              onClick={(e) => {
                setCity(input);
                setInput("");
              }}
            >
              Search
            </Button>
          </div>
          <div className="mt-4 pe-3 me-5 ">
            <HomeDetailUp city={city} />
          </div>
        </Col>
        <Col md={6}>
          <HomeDetailDown city={city} />
        </Col>
      </Row>
    </Container>
  );
};
export default LandingPage;
