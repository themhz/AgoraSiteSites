import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { Button, Form, Container, Card, Alert, Row, Col } from "react-bootstrap";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handlePurchase = () => {
    if (!paymentMethod) {
      setErrorMessage("⚠ Please select a payment method before proceeding.");
      return;
    }

    if (paymentMethod === "credit-card") {
      if (!validateCardDetails()) {
        setErrorMessage("⚠ Please enter valid credit card details.");
        return;
      }
    }

    // Simulate payment success/failure
    const success = Math.random() > 0.2; // 80% chance of success
    if (success) {
      navigate("/confirmation", { state: { paymentMethod } });
    } else {
      navigate("/error");
    }
  };

  const validateCardDetails = () => {
    const { number, expiry, cvv } = cardDetails;
    const cardRegex = /^[0-9]{16}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    const cvvRegex = /^[0-9]{3,4}$/;
    return cardRegex.test(number) && expiryRegex.test(expiry) && cvvRegex.test(cvv);
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center mt-5">
      <Card className="p-4 shadow-lg" style={{ width: "420px" }}>
        <h3 className="text-center mb-4">💳 Choose Payment Method</h3>

        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        <Form>
          <Form.Group className="mb-3">
            {/* Credit Card Option */}
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
                <Form.Check
                  type="radio"
                  name="payment"
                  id="credit-card"
                  className="me-2"
                  onChange={() => setPaymentMethod("credit-card")}
                />
                <label htmlFor="credit-card" className="w-100">
                  <FontAwesomeIcon icon={faCreditCard} className="text-primary me-2" />
                  <strong>Credit Card</strong>
                  <p className="small text-muted m-0">Pay securely with Visa, MasterCard, or AMEX.</p>
                </label>
              </div>

              {/* Show Credit Card Form RIGHT BELOW */}
              {paymentMethod === "credit-card" && (
                <div className="px-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength="16"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Expiry (MM/YY)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="MM/YY"
                          maxLength="5"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="123"
                          maxLength="4"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              )}
            </div>

            {/* PayPal Option */}
            <div className="d-flex align-items-center mt-3">
              <Form.Check
                type="radio"
                name="payment"
                id="paypal"
                className="me-2"
                onChange={() => setPaymentMethod("paypal")}
              />
              <label htmlFor="paypal" className="w-100">
                <FontAwesomeIcon icon={faPaypal} className="text-primary me-2" />
                <strong>PayPal</strong>
                <p className="small text-muted m-0">Checkout quickly using your PayPal account.</p>
              </label>
            </div>
          </Form.Group>

          <Button variant="success" className="w-100 mt-3" onClick={handlePurchase}>
            ✅ Purchase Ticket
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Payment;
