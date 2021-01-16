import styled from "styled-components";
import styles from "./styles";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 30px;

  h2 {
    font-size: 4ch;
    margin-bottom: 20px;
  }

  &.flex {
    display: flex;
  }
`;

export const HeroBackground = styled.div`
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  background: ${styles.background};
  position: absolute;
  top: 0;
  z-index: -999;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
`;
