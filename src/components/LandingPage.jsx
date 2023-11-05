import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MyBodyHeader from "./MyBodyHeader";
// import HomeDetailUp from "./HomeDetailUp";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars

import SingleDayCard from "./SingleDayCard";

const LandingPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [apiKey, setApiKey] = useState("cc26374c242114b45fc891297ff79e38");
  // eslint-disable-next-line no-unused-vars
  const [latitude, setLatitude] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [longitude, setLongitude] = useState("");
  const [region, setRegion] = useState("Campania");
  const [today, setToday] = useState("");
  const [weather, setWeather] = useState("");
  const [input, setInput] = useState("");
  const [city, setCity] = useState("Procida");
  // eslint-disable-next-line no-unused-vars
  const [country, setCountry] = useState("IT");
  const myFetch = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((data) => {
        console.log(data);
        setLatitude(data[0].lat);
        setLongitude(data[0].lon);
        setCountry(data[0].country);
        setRegion(data[0].state);
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=${apiKey}`
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Error while getting the datas");
            }
          })
          .then((data) => {
            setWeather(data.list);
          })
          .catch((err) => console.log("Error: ", err));
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}`
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Error while getting weather-infos");
            }
          })
          .then((datas) => {
            setToday(datas.weather[0]);
          })
          .catch((err) => console.log("Error: ", err));
      })
      .catch((err) => console.log("Error: ", err));
  };

  useEffect(() => {
    myFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <Container
      fluid
      className=" text-center d-flex align-items-center justify-content-center rounded h-100 my-1"
    >
      <Row
        className=" text-focus-in border border-black bg-2 h-100 rounded z-1 display-4 text-white fw-bold w-100"
        id=""
      >
        <Col className="col-12">
          <MyBodyHeader />
        </Col>
        <Col xl={4} className="d-flex flex-column justify-content-center">
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
              className="btn-red"
              onClick={(e) => {
                setCity(input);
                setInput("");
              }}
            >
              Search
            </Button>
          </div>
        </Col>
        <Col xl={8}>
          <Container>
            <SingleDayCard
              weather={weather}
              country={country}
              region={region}
              city={city}
              today={today}
            />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default LandingPage;
