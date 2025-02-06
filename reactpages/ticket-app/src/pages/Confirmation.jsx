import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Card, Row, Col } from "react-bootstrap";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const paymentMethod = location.state?.paymentMethod || "Unknown";
  const eventDetails = location.state?.eventDetails || {
    name: "🎤 React Conference 2025",
    date: "📅 March 15, 2025",
    time: "⏰ 10:00 AM - 4:00 PM",
    location: "📍 New York, USA",
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center mt-5">
      <Card className="p-4 shadow-lg text-center" style={{ width: "500px" }}>
        <h3 className="text-success">🎉 Ticket Successfully Purchased!</h3>
        <p>Thank you for booking your ticket. Here are your event details:</p>

        {/* Ticket Details Section */}
        <Card className="mt-3 p-3 shadow-sm">
          <Row>
            <Col xs={12} className="text-center">
              {/* Placeholder Image */}
              <div
                style={{
                  width: "100%",
                  height: "150px",
                  backgroundColor: "#e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                  color: "#555",
                }}
              >
                Event Image Placeholder
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
              <h5>{eventDetails.name}</h5>
              <p>{eventDetails.date}</p>
              <p>{eventDetails.time}</p>
              <p>{eventDetails.location}</p>
              <p><strong>💳 Payment Method:</strong> {paymentMethod.toUpperCase()}</p>
            </Col>
          </Row>
        </Card>

        <Button variant="success" className="mt-4" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Card>
    </Container>
  );
};

export default Confirmation;
