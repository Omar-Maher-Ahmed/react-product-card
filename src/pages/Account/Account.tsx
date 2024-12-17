import React, { useState } from "react";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import Joi, { string } from "joi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const schema = Joi.object({
  firstName: Joi.string().min(2).max(30).required().messages({
    "string.empty": "First Name is required",
    "string.min": "First Name must be at least 2 characters",
    "string.max": "First Name cannot exceed 30 characters",
  }),
  lastName: Joi.string().min(2).max(30).required().messages({
    "string.empty": "Last Name is required",
    "string.min": "Last Name must be at least 2 characters",
    "string.max": "Last Name cannot exceed 30 characters",
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": "Email is required",
    "string.email": "Please enter a valid email address",
  }),
  address: Joi.string().max(100).messages({
    "string.max": "Address cannot exceed 100 characters",
  }),
  currentPassword: Joi.string().allow("").messages({}),
  newPassword: Joi.string().min(6).allow("").messages({
    "string.min": "New Password must be at least 6 characters",
  }),
  confirmPassword: Joi.any().equal(Joi.ref('newPassword')).messages({
    "any.only": "Confirm Password must match New Password",
  }),
});

const Account = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const togglePasswordVisibility = (field: string) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error } = schema.validate(formData, { abortEarly: false });

    if (error) {
      const errorMessages = {};
      error.details.forEach((err) => {
        errorMessages[err.context.key] = err.message;
      });
      setErrors(errorMessages);
      return;
    }

    setLoading(true);
    // Perform form submission logic here (e.g., API call)
    console.log("Form submitted", formData);
    setTimeout(() => setLoading(false), 2000); // Simulate API call
  };

  return (<>
    <h3 className="text-danger d-flex align-items-center justify-content-center ">Edit Your Profile</h3>
    <div className="min-vh-100 w-100 d-flex align-items-center justify-content-center text-nowrap rounded-4">
      <Form onSubmit={handleSubmit} className="bg-white p-3">
        <Row className="mb-3 ">
          <Col>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <h5 className="mt-4">Password Changes</h5>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formCurrentPassword" className="position-relative">
              <Form.Label>Current Password</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type={showPassword.currentPassword ? "text" : "password"}
                  name="currentPassword"
                  placeholder="Enter your current password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
                <Button
                  variant="outline-secondary"
                  className="ms-2"
                  onClick={() => togglePasswordVisibility("currentPassword")}
                >
                  {showPassword.currentPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </Button>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formNewPassword" className="position-relative">
              <Form.Label>New Password</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type={showPassword.newPassword ? "text" : "password"}
                  name="newPassword"
                  placeholder="Enter your new password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  isInvalid={!!errors.newPassword}
                />
                <Button
                  variant="outline-secondary"
                  className="ms-2"
                  onClick={() => togglePasswordVisibility("newPassword")}
                >
                  {showPassword.newPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </Button>
              </div>
              <Form.Control.Feedback type="invalid">
                {errors.newPassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formConfirmPassword" className="position-relative">
              <Form.Label>Confirm New Password</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type={showPassword.confirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your new password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  isInvalid={!!errors.confirmPassword}
                />
                <Button
                  variant="outline-secondary"
                  className="ms-2"
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                >
                  {showPassword.confirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </Button>
              </div>
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-between mt-4">
          <Button variant="secondary" type="button">
            Cancel
          </Button>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <Button variant="danger" type="submit">
              Save Changes
            </Button>
          )}
        </div>
      </Form>
    </div>
  </>
  );
};

export default Account;
