import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" loop autoPlay muted />
      <Container>
        <MainHeading>READ, KNOW, STAY INFORMED</MainHeading>
        <HeroText>
          "Stay ahead of the game with our cutting-edge news coverage"
        </HeroText>
        <ButtonWrapper>
          <Link to="login">
            <Button>Get Started</Button>
          </Link>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
