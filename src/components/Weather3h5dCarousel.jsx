import { Carousel, Col, Container, Row } from "react-bootstrap";

import Weather3hSingleSection from "./Weather3hSingleSection";

const Weather3h5dCarousel = (props) => {
  return (
    <Carousel className="my-2">
      <Carousel.Item className="extra-small">
        <Container className="">
          <Row>
            <Col className="extra-small date fw-bold col-12">
              {props.weather[1].dt_txt.slice(0, 10)}/
              {props.weather[8].dt_txt.slice(8, 10)}
            </Col>

            {props.weather
              .filter((el, i) => i < 8)
              .map((first8, index) => {
                return (
                  <Col className="col-3 col-lg" key={index}>
                    <Weather3hSingleSection data={first8} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item className="extra-small">
        <Container>
          <Row>
            <Col className="extra-small date fw-bold col-12">
              {props.weather[8].dt_txt.slice(0, 10)}/
              {props.weather[16].dt_txt.slice(8, 10)}
            </Col>

            {props.weather
              .filter((el, i) => i < 16 && i > 7)
              .map((first8, index) => {
                return (
                  <Col className="col-3 col-lg" key={index}>
                    <Weather3hSingleSection data={first8} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item className="extra-small">
        <Container>
          <Row className="w-100">
            <Col className="extra-small date fw-bold col-12">
              {props.weather[16].dt_txt.slice(0, 10)}/
              {props.weather[24].dt_txt.slice(8, 10)}
            </Col>

            {props.weather
              .filter((el, i) => i < 24 && i > 15)
              .map((first8, index) => {
                return (
                  <Col className="col-3 col-lg" key={index}>
                    <Weather3hSingleSection data={first8} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item className="extra-small">
        <Container>
          <Row>
            <Col className="extra-small date fw-bold col-12">
              {props.weather[24].dt_txt.slice(0, 10)}/
              {props.weather[32].dt_txt.slice(8, 10)}
            </Col>

            {props.weather
              .filter((el, i) => i < 32 && i > 23)
              .map((first8, index) => {
                return (
                  <Col className="col-3 col-lg" key={index}>
                    <Weather3hSingleSection data={first8} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item className="extra-small">
        <Container>
          <Row>
            <Col className="extra-small date fw-bold col-12">
              {props.weather[32].dt_txt.slice(0, 10)}/
              {props.weather[39].dt_txt.slice(8, 10)}
            </Col>

            {props.weather
              .filter((el, i) => i < 40 && i > 31)
              .map((first8, index) => {
                return (
                  <Col className="col-3 col-lg" key={index}>
                    <Weather3hSingleSection data={first8} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default Weather3h5dCarousel;
