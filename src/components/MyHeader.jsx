import { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { CloudFill } from "react-bootstrap-icons";

const MyHeader = () => {
  const [hover, setHover] = useState(false);
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div
        className="header-bg d-flex flex-row align-items-center"
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      >
        <ListGroup className="bg-transparent border-0 text-center d-flex flex-row">
          <ListGroup.Item className="bg-transparent border-0 bounce-in-top">
            <CloudFill className="fs-2 header-hover" id="firstCloud" />
          </ListGroup.Item>
          {hover && (
            <ListGroup.Item className="bg-transparent border-0 px-1 pointer">
              <div className="text-white px-3 smaller d-flex flex-column justify-content-center align-items-center">
                <CloudFill className="header-hover fs-4 text-warning p-0 m-0" />
                <span> Contact Us</span>
              </div>
            </ListGroup.Item>
          )}
          {hover && (
            <ListGroup.Item className="bg-transparent border-0 px-1 smaller pointer">
              <div className="text-white px-3 smaller d-flex flex-column justify-content-center align-items-center">
                <CloudFill className="header-hover fs-4 text-info p-0 m-0" />
                <span>Info</span>
              </div>
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    </Container>
  );
};
export default MyHeader;
