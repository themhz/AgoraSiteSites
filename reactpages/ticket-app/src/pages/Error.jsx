import { useNavigate } from "react-router-dom";
import { Button, Container, Card } from "react-bootstrap";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center mt-5">
      <Card className="p-4 shadow-lg text-center text-danger" style={{ width: "400px" }}>
        <h3>❌ Payment Failed!</h3>
        <p>Something went wrong. Please try again.</p>
        <Button variant="danger" onClick={() => navigate("/payment")}>Try Again</Button>
      </Card>
    </Container>
  );
};

export default ErrorPage;
