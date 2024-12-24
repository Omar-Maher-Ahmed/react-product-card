import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IRegister } from "../../util/interfaces";
import { useAppContext } from "../../context/AppContext";
import Joi from "joi";
import Spinner from "react-bootstrap/Spinner";

export const schema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
    "string.max": "Name cannot exceed 30 characters",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
    }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 6 characters",
  }),
});

export default function RegisterForm() {
  const { loading, handleRegister } = useAppContext();
  const [errors, setErrors] = useState<IRegister>({
    email: "",
    password: "",
    name: "",
  });

  const [inputDate, setInputDate] = useState<IRegister>({
    email: "",
    password: "",
    name: "",
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
      const errorMessages: Partial<IRegister> = {};
      error.details.forEach((err) => {
        if (err.context?.key) {
          errorMessages[err.context.key as keyof IRegister] = err.message;
        }
      });
      setErrors(errorMessages as IRegister);
      return;
    }
    handleRegister(inputDate);
  };

  return (
    <div>
      <Container className="">
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={handleChange}
                value={inputDate.name}
                isInvalid={!!errors.name}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter email"
                value={inputDate.email}
                isInvalid={!!errors.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <Button
                variant="primary"
                type="submit"
                className="button {style.Button}"
              >
                Submit
              </Button>
            )}
          </Form>
        </Row>
      </Container>
    </div>
  );
}
