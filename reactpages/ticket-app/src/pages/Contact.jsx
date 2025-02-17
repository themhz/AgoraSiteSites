import { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("⚠ Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("⚠ Please enter a valid email.");
      return;
    }

    // Simulate sending the message
    setTimeout(() => {
      setSubmitted(true);
      setError("");
    }, 1000);


    
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center mt-5">
      <Card className="p-4 shadow-lg" style={{ width: "500px" }}>
        <h3 className="text-center mb-4">📧 Contact Us</h3>

        {submitted ? (
          <Alert variant="success">✅ Your message has been sent! We will reply soon.</Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your message..."
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" className="w-100" type="submit">
              Send Message
            </Button>
          </Form>
        )}
      </Card>
    </Container>
  );
};

export default Contact;
