import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ILogin } from "../../util/interfaces";
import { useAppContext } from "../../context/AppContext";
import Joi from "joi";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

const schema = Joi.object({
  email: Joi.string().required().messages({
    "string.empty": "Email is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});

export default function RegisterForm() {
  const navigate = useNavigate();
  const { handleLogIn, errorMSG, user } = useAppContext();
  const [errors, setErrors] = useState<ILogin>({ email: "", password: "" });

  const [inputDate, setInputDate] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputDate({ ...inputDate, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = schema.validate(inputDate, { abortEarly: false });

    if (error) {
      // Map Joi validation errors to the errors state
      const errorMessages: Partial<ILogin> = {};
      error.details.forEach((err) => {
        if (err.context?.key) {
          errorMessages[err.context.key as keyof ILogin] = err.message;
        }
      });
      setErrors(errorMessages as ILogin);
      return;
    }
    handleLogIn(inputDate);
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  return (
    <div>
      <Container className="">
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Control.Feedback
              style={{ display: errorMSG ? "block" : "none" }}
              type="invalid"
            >
              {errorMSG}
            </Form.Control.Feedback>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={inputDate.email}
                isInvalid={!!errors.email}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                value={inputDate.password}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            {errorMSG ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <Button variant="primary" type="submit" className="button">
                Submit
              </Button>
            )}
          </Form>
        </Row>
      </Container>
    </div>
  );
}
