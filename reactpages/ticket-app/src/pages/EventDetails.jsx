import { useParams, Link, useNavigate } from "react-router-dom";
import { Button, Container, Card } from "react-bootstrap";

const events = [
  { id: 1, name: "React Conference", date: "March 15, 2025", location: "New York, USA" },
  { id: 2, name: "JavaScript Summit", date: "April 20, 2025", location: "London, UK" },
  { id: 3, name: "Php Summit", date: "April 21, 2025", location: "Greece, GR" },
];

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));
  const navigate = useNavigate();

  if (!event) return <h2>Event Not Found</h2>;

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center mt-5">
      <Card className="p-4 shadow-lg text-center" style={{ width: "500px" }}>
        <h2>{event.name}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <Button variant="primary" onClick={() => navigate("/payment")}>Buy Ticket</Button>
      </Card>
    </Container>
  );
};

export default EventDetails;
