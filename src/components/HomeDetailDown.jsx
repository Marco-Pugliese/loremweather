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
      `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&lang=it&appid=${apiKey}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while gettind the datas");
        }
      })
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    myFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.city]);

  return (
    <>
      <Container>weather</Container>
    </>
  );
};
export default HomeDetailDown;
