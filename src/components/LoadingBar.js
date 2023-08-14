import styled, { keyframes } from "styled-components";

const progress = keyframes`
0%{
    width: 0%;
}
25%{
    width: 30%
}
50%{
    width: 70%;
}
100%{
    width: 100%;
}
`;
const DotsAnimation = keyframes`
0%{
    content: "";
}
40%{
    content: ".";
}
60%{
    content: "..";
}
100%{
    content: "...";
}
`;

const LoadingBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backgrond-color: transparents;
`;
const Dots = styled.span`
  content: "";
  &::before {
    content: "";
    animation: ${DotsAnimation} 0.75s infinite;
  }
`;

const LoadingBarPositiner = styled.div`
  width: 70%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: #fff;
    margin: 0;
    margin-bottom: 10px;
  }
`;
const LoadingBarBorder = styled.div`
  width: 100%;
  height: 50px;
  border: 3px solid #fff;
  border-radius: 15px;
  position: relative;
`;
const LoadingProgress = styled.div`
  width: 0%;
  height: 100%;
  position: absolute;
  background: tomato;
  border-radius: 15px;

  animation: ${progress} 1.8s ease-in-out forwards;
`;

export default function LoadingBar() {
  return (
    <LoadingBackground>
      <LoadingBarPositiner>
        <h3 className="eng">
          Loading
          <Dots />
        </h3>
        <LoadingBarBorder>
          <LoadingProgress />
        </LoadingBarBorder>
      </LoadingBarPositiner>
    </LoadingBackground>
  );
}
