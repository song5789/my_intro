import styled from "styled-components";
import React from "react";

const StyledBack = styled.div`
  width: 100%;
  background: #ffe259;
  background: -webkit-linear-gradient(to right, #ffa751, #ffe259);
  background: linear-gradient(to right, #ffa751, #ffe259);
  background-size: 400% 400%;
  position: absolute;
`;

function GradienBG({ children }) {
  return <StyledBack className="bg">{children}</StyledBack>;
}

export default React.memo(GradienBG);
