import styled from "styled-components";

import { Container } from "./common/container";

const email = "jongsun250@gmail.com";
const contactText = (
  <>
    If you need a modern and powerful website for your business, startup or
    personally, I am available for work. You can email me directly at{" "}
    <span className="highlight">{email}</span>.
  </>
);

const Contact = () => {
  return (
    <ContactContainer className="flex">
      <h2 className="contact-title">
        Want to <span className="highlight">work?</span>
      </h2>
      <p className="contact-content">{contactText}</p>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled(Container)`
  padding: 70px 30px;
  .contact-title {
    flex: 1;
    margin-right: 90px;
  }
  .contact-content {
    flex: 1;
    margin-top: 0;
  }

  .highlight::after {
    width: 100%;
    left: 0;
  }
`;
