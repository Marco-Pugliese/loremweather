import { useEffect, useState } from "react";
import {
  CloudDrizzle,
  CloudRainHeavyFill,
  CloudsFill,
  Snow2,
  SunFill,
} from "react-bootstrap-icons";

const CityWeather = ({ today }) => {
  const [weather, setWeather] = useState(today.main);

  useEffect(() => {
    setWeather(today.main);
  }, [today]);
  return (
    <div className="date smaller">
      <div>{today.description}</div>
      <div className="py-2 display-4">
        {weather === "Clear" && <SunFill />}
        {weather === "Rain" && <CloudRainHeavyFill />}
        {weather === "Clouds" && <CloudsFill />}
        {weather === "Drizzle" && <CloudDrizzle />}
        {weather === "Snow" && <Snow2 />}
      </div>
    </div>
  );
};
export default CityWeather;
