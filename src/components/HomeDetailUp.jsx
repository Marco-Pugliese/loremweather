import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CityName from "./CityName";
import CityWeather from "./CityWeather";

const HomeDetailUp = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [apiKey, setApiKey] = useState("cc26374c242114b45fc891297ff79e38");
  const [latitude, setLatitude] = useState("41.8933203");
  const [longitude, setLongitude] = useState("12.4829321");
  const [weather, setWeather] = useState("");

  const myFetch = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${props.city}&appid=${apiKey}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the fetch-datas");
        }
      })
      .then((datas) => {
        setLatitude(datas[0].lat);
        setLongitude(datas[0].lon);
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Error while getting weather-infos");
            }
          })
          .then((data) => {
            setWeather(data.weather[0].description);
          })
          .catch((err) => console.log("Error: ", err));
      })
      .catch((err) => console.log("Error: ", err));
  };
  useEffect(() => {
    myFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.city]);

  return (
    <>
      <Container className=" d-flex flex-column text-end">
        <CityName city={props.city} />
        <CityWeather weather={weather} />
      </Container>
    </>
  );
};
export default HomeDetailUp;
