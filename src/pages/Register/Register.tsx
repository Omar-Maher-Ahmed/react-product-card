import { Col, Container } from "react-bootstrap";
import AuthPhoto from "../../components/AuthPhoto/AuthPhoto";
import RegisterForm from "../../components/Forms/RegisterForm";
import { Row } from "react-bootstrap";

export default function Register() {
  return (
    <div className="main-img-bg min-vh-100 w-100 d-flex align-items-center justify-content-center text-nowrap">
      <Container>
        <Row className="align-items-center bg-white rounded-3">
          <Col xs={12} md={6} className="p-3">
            <AuthPhoto />
          </Col>
          <Col xs={12} md={6} className="p-3">
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
