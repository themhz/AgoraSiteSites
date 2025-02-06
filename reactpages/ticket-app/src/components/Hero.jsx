import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <header fade interval={3000} className="hero-carousel">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://placehold.co/1200x400" alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to Event Registration</h3>
            <p>Find and register for amazing events.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://placehold.co/1200x400" alt="Second slide" />
          <Carousel.Caption>
            <h3>Discover New Conferences</h3>
            <p>Join the best conferences around the world.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default Hero;
