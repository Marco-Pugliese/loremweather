import { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { CloudFill } from "react-bootstrap-icons";

const MyHeader = () => {
  const [hover, setHover] = useState(false);
  return (
    <Container className="d-flex justify-content-center ">
      <div
        className="header-bg d-flex flex-column"
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      >
        <ListGroup className="bg-transparent border-0 text-center">
          <ListGroup.Item className="bg-transparent border-0 bounce-in-top">
            <CloudFill
              className="display-4 mt-1 header-hover"
              id="firstCloud"
            />
          </ListGroup.Item>
          {hover && (
            <ListGroup.Item className="bg-transparent border-0 px-1 pointer">
              <div className="d-flex align-items-center justify-content-between smaller">
                <CloudFill className="display-4 mt-1 header-hover fs-4 text-warning" />

                <div className="text-white px-3">Contact Us</div>

                <CloudFill className="display-4 mt-1 header-hover fs-4 text-info" />
              </div>
            </ListGroup.Item>
          )}
          {hover && (
            <ListGroup.Item className="bg-transparent border-0 px-1 smaller pointer">
              <div className="d-flex align-items-center justify-content-between">
                <CloudFill className="display-4 mt-1 header-hover fs-4 text-info" />
                <div className="text-white px-3">Info</div>
                <CloudFill className="display-4 mt-1 header-hover fs-4 text-warning" />
              </div>
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    </Container>
  );
};
export default MyHeader;
