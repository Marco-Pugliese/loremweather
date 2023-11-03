import { Container } from "react-bootstrap";
import { Envelope, Facebook, Instagram, Twitter } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <Container className=" text-footer d-flex justify-content-center py-3 ">
      <div className="w-50 text-end smaller me-4">
        ©Copyright LoremWeather -{" "}
        <span className="date">{new Date().getFullYear()}</span>
      </div>
      <div className="w-50 text-start d-flex ms-4">
        <Facebook className="mx-3 hovered" />
        <Instagram className="mx-3 hovered" />
        <Twitter className="mx-3 hovered" />
        <Envelope className="mx-3 hovered" />
      </div>
    </Container>
  );
};
export default MyFooter;
