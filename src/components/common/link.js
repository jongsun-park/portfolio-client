import styled from "styled-components";

import styles from "../common/styles";

export const Link = styled.a``;

export const StyledLink = styled.a`
  font-weight: bold;
  position: relative;

  &::before {
    content: "";
    background: ${styles.highlight};
    width: 100%;
    height: 70%;
    position: absolute;
    top: 40%;
    left: 0px;
    z-index: -1;
    transition: all ease 100ms;
  }

  &:hover {
    &::before {
      top: 70%;
      height: 50%;
    }
  }
`;
