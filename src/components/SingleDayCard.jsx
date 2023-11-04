import { Button, Card } from "react-bootstrap";

const SingleDayCard = (props) => {
  return (
    <Card>
      <Card.Body>
        {props.data.name}
        <Card.Text className="smaller d-flex justify-content-between">
          <div>Min : {Math.round(props.data.main.temp_min)}</div>
          <div>Max : {Math.round(props.data.main.temp_min)}</div>
        </Card.Text>
        <Button variant="primary">Check Today's Weather</Button>
      </Card.Body>
    </Card>
  );
};
export default SingleDayCard;
