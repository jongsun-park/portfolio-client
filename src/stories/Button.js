import styled from "styled-components";

export const Button = ({ background, label }) => {
  return <StyledButton background={background}>{label}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: ${({ background }) => background || null};
`;
