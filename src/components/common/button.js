import styled from "styled-components";

import styles from "../common/styles";

export const StyledButton = styled.button`
  background: ${styles.black};
  padding: 18px 42px;
  border: 1px solid ${styles.black};
  color: ${styles.white};
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    border: 2px solid ${styles.black};
    width: 100%;
    height: 100%;
    top: 6px;
    left: 6px;
    transition: all ease-out 300ms;
  }

  &:hover {
    &::after {
      top: -1px;
      left: -2px;
    }
  }
`;
