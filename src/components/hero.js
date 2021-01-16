import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { Container, HeroBackground } from "./common/container";
import { StyledButton } from "./common/button";

import styles from "./common/styles";

const title = (
  <h1>
    Hi, I’m Duke, <span>Web Designer</span> and <span>Webflow</span> Developer
  </h1>
);

const description =
  "I design and build beautiful websites for businesses around the globe. If you need a modern and powerful website, send me an email. If we are a good fit, I will give you a time and cost estimate.";
const buttonText = "see my work";
const delay = "300";

const Hero = () => {
  useEffect(() => {
    const highlight = document.querySelectorAll("h1 > span");
    highlight.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("highlight");
      }, delay * index);
    });
  }, []);

  return (
    <section>
      <HeroContainer>
        <div className="hero-title">{title}</div>
        <p className="hero-description">{description}</p>
        <StyledButton className="hero-button flat-button">
          {buttonText}
        </StyledButton>
      </HeroContainer>
      <HeroBackground />
    </section>
  );
};

export default Hero;

const highlight = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
`;

const HeroContainer = styled(Container)`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .hero-title {
    h1 {
      font-size: 4ch;
      max-width: 20ch;

      .highlight {
        // position: relative;
        // &::after {
        //   content: "";
        //   z-index: -1;
        //   position: absolute;
        //   background: ${styles.highlight};
        //   width: 0;
        //   height: 50%;
        //   top: 50%;
        //   left: 5px;
        animation: ${highlight} ${delay}ms ease-out forwards;
        // }
      }
    }
  }
  .hero-description {
    max-width: 48ch;
    margin-bottom: 64px;
    display: block;
  }

  .hero-button {
  }
`;
