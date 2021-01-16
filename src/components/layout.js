import styled from "styled-components";
import { Container, HeroBackground } from "./common/container";
import { StyledLink } from "./common/link";
import Contact from "./contact";

const email = "jongsun250@gmail.com";

const Header = () => (
  <header>
    <HeaderContainer>
      <img src="/logo.svg" alt="logo" />
      <div>
        <StyledLink href={`mailto:${email}`}>get in touch</StyledLink>
        <StyledLink href="#projects">my work</StyledLink>
      </div>
    </HeaderContainer>
  </header>
);

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  a + a {
    margin-left: 47px;
  }
`;

const Footer = () => (
  <footer>
    <Contact />
    <Container>© All right reserved – The Duke</Container>
    <HeroBackground />
  </footer>
);

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;

  main {
    flex: 1;
  }
  section {
    position: relative;
  }
  header {
    position: absolute;
    top: 15px;
    width: 100%;
    z-index: 1000;
  }
  footer {
    position: relative;
  }
`;
