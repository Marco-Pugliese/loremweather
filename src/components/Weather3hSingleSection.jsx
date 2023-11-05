import { Col } from "react-bootstrap";
import { ThermometerHalf } from "react-bootstrap-icons";
import Temperature from "./Temperature";
import Hour from "./Hour";
import { useEffect, useState } from "react";
import ForeCast from "./ForeCast";
import Windy from "./Windy";

const Weather3hSingleSection = (props) => {
  const [forecast, setForecast] = useState(props.data.weather[0].main);
  useEffect(() => {
    setForecast(props.data.weather[0].main);
  }, [props.data.weather]);
  return (
    <Col className="extra-small text-start py-2 my-2">
      <div className="smaller d-flex justify-content-center fw-bold rounded border border-black py-1 date shadow-lg">
        <Hour hour={props.data.dt_txt.slice(10, 16)} />
      </div>
      <div className="my-1 fw-bold rounded border border-black py-3 shadow-lg">
        <div className=" d-flex justify-content-evenly ">
          <ThermometerHalf className="fs-6" />
          <Temperature data={props.data.main.temp} />
        </div>
        <div className="d-flex justify-content-center">
          <ForeCast forecast={forecast} />
        </div>
        <div className="d-flex justify-content-center">
          <Windy wind={props.data.wind} />
        </div>
      </div>
      <div className="smaller"></div>
    </Col>
  );
};

export default Weather3hSingleSection;
