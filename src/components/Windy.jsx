import { CompassFill, Wind } from "react-bootstrap-icons";

const Windy = (props) => {
  return (
    <div className="d-flex flex-column mt-1">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <Wind />{" "}
        </div>
        <div className="smaller ps-2 fw-bold shadow-lg">
          {Math.round(parseInt(props.wind.speed))} km/h
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <CompassFill />
        </div>
        <div className="smaller ps-2 fw-bold shadow-lg">{props.wind.deg}°</div>
      </div>
    </div>
  );
};
export default Windy;
