import { useEffect, useState } from "react";

const Temperature = (props) => {
  const [temperature, setTemperature] = useState(props.data);
  useEffect(() => {
    setTemperature(props.data);
  }, [props.data]);
  return (
    <div className="fw-bold shadow-lg">
      {Math.round(parseInt(temperature))}°
    </div>
  );
};
export default Temperature;
