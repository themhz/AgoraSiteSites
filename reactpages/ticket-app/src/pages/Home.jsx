import { Link } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";

const events = [    
    { id: 1, name: "React Conference", date: "March 15, 2025", location: "New York, USA" },
    { id: 2, name: "JavaScript Summit", date: "April 20, 2025", location: "London, UK" },
    { id: 3, name: "Php Summit", date: "April 21, 2025", location: "Greece, GR" },
];

function Home() {
  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h1 className="mb-4 fw-bold text-center">🏠 Home - Upcoming Events</h1>

      <Row className="justify-content-center w-100">
        {events.map((event) => (
          <Col key={event.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <Card className="mb-3 shadow-lg border-0 text-center" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="fw-bold">{event.name}</Card.Title>
                <Card.Text className="text-muted">
                  📅 <strong>{event.date}</strong> <br />
                  📍 {event.location}
                </Card.Text>
                <Link to={`/event/${event.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
