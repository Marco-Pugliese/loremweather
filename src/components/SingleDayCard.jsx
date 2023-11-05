import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CityWeather from "./CityWeather";
import CityName from "./CityName";
import Weather3h5dCarousel from "./Weather3h5dCarousel";

const SingleDayCard = (props) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    setWeather(props.weather);
  }, [props.weather]);
  return (
    <>
      <Row className="justify-content-center">
        {weather && (
          <div className="mainContent ">
            <div>
              <CityName city={props} />
              <CityWeather today={props.today} />
            </div>
            <Weather3h5dCarousel weather={props.weather} />
          </div>
        )}
      </Row>
    </>
  );
};
export default SingleDayCard;
