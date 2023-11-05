import {
  CloudDrizzle,
  CloudRainHeavyFill,
  CloudsFill,
  Snow2,
  SunFill,
} from "react-bootstrap-icons";

const ForeCast = ({ forecast }) => {
  return (
    <div className="fs-5 shadow-lg date my-2">
      {forecast === "Clear" && <SunFill />}
      {forecast === "Rain" && <CloudRainHeavyFill />}
      {forecast === "Clouds" && <CloudsFill />}
      {forecast === "Drizzle" && <CloudDrizzle />}
      {forecast === "Snow" && <Snow2 />}
    </div>
  );
};
export default ForeCast;
