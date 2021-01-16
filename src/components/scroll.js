import { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";

const Scroll = () => {
  // const clientHeight = document.querySelector("body").clientHeight; // Entire body height
  // const pageYOffset = window.pageYOffset; // Scrolled Height
  // const innerHeight = window.innerHeight; // Viewport Height

  const [direction, setDriection] = useState(
    window.pageYOffset + window.innerHeight * 2 >=
      document.querySelector("body").clientHeight
    // true - go up
    // false - down
  );

  useEffect(() => {
    const ctrl = document.querySelector(".scroll-ctrl");
    if (direction) {
      ctrl.innerText = "go up";
      ctrl.classList.add("up");
    } else {
      ctrl.innerText = "scroll";
      ctrl.classList.remove("up");
    }
  }, [direction]);

  const scrollHandler = () => {
    if (direction) {
      // go to up
      window.scroll(0, 0);
      setDriection(false);
    } else {
      // go to bottom
      window.scroll(0, window.pageYOffset + window.innerHeight);

      // console.log(
      //   window.pageYOffset + window.innerHeight * 3,
      //   document.querySelector("body").clientHeight
      // );

      if (
        window.pageYOffset + window.innerHeight * 3 >=
        document.querySelector("body").clientHeight
      )
        setDriection(true);
    }
  };

  return (
    <ScrollContainer onClick={scrollHandler} className="scroll-ctrl">
      scroll
    </ScrollContainer>
  );
};

export default Scroll;

const moving = keyframes`
from{
  margin-top: 0;
}
to{
  margin-top: 10px;
}
`;

const ScrollContainer = styled.div`
  letter-spacing: 1px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  border-bottom: 2px solid;
  position: fixed;
  top: 90vh;
  right: 10px;
  padding: 0px 10px 4px 4px;
  transition: all ease-out 300ms;
  transform: rotate(90deg);
  animation: 1s ease-out infinite alternate ${moving};
  cursor: pointer;
  z-index: 1;

  &.up {
    transform: rotate(-90deg);
  }
`;
