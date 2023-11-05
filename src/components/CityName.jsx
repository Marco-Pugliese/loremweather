const CityName = (props) => {
  console.log(props);
  return (
    <div id="city" className="mainContent">
      <div className="display-3">
        <span>{props.city.city},</span>
        <span className="date extra-small">{props.city.region}</span>,
        {props.city.country}
      </div>
    </div>
  );
};
export default CityName;
