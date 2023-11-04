import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SingleDayCard from "./SingleDayCard";

const HomeDetailDown = (props) => {
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
          `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&appid=${apiKey}`
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Error while getting weather-fetch-info");
            }
          })
          .then((risp) => {
            setWeather(risp);
          })
          .catch((err) => {
            console.log("Error: ", err);
          });
      })
      .catch((err) => console.log("Error: ", err));
  };

  useEffect(() => {
    myFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.city]);

  return (
    <>
      <Container>
        <SingleDayCard data={weather} />
      </Container>
    </>
  );
};
export default HomeDetailDown;
