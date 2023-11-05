import { ClockFill } from "react-bootstrap-icons";

const Hour = (props) => {
  return (
    <div>
      <ClockFill /> {props.hour}
    </div>
  );
};
export default Hour;
