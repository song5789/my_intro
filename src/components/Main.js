import styled, { keyframes } from "styled-components";

const StyledMain = styled.div`
  width: 100%;
  background: transparents;
  color: #fff;
  margin: 5rem auto;
  padding: 35px 35px;
  box-sizing: border-box;
  text-align: center;
  -webkit-font-smoothing: antialiased;
`;

const bounce = keyframes`
100% {
  top: -20px;
  text-shadow: 0 1px 0 #CCC,
               0 2px 0 #CCC,
               0 3px 0 #CCC,
               0 4px 0 #CCC,
               0 5px 0 #CCC,
               0 6px 0 #CCC,
               0 7px 0 #CCC,
               0 8px 0 #CCC,
               0 9px 0 #CCC,
               0 50px 25px rgba(0, 0, 0, .2);
}
`;

const BouncedText = styled.div`
  transform: rotate(370deg);

  h1 {
    height: 100px;
    margin: 10px 0;
    position: relative;
    z-index: 0;
  }
  h1 span {
    position: relative;
    top: 20px;
    display: inline-block;
    animation: ${bounce} 1s ease infinite alternate;
    font-size: 150%;
    color: #fff;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
      0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
  }
  h1 span:nth-child(2) {
    animation-delay: 0.1s;
  }
  h1 span:nth-child(3) {
    animation-delay: 0.2s;
  }
  h1 span:nth-child(4) {
    animation-delay: 0.3s;
  }
  h1 span:nth-child(5) {
    animation-delay: 0.4s;
  }
  h1 span:nth-child(6) {
    animation-delay: 0.5s;
  }
  h1 span:nth-child(7) {
    animation-delay: 0.6s;
  }
  h1 span:nth-child(8) {
    animation-delay: 0.7s;
  }
  h1 span:nth-child(9) {
    animation-delay: 0.8s;
  }
  h1 span:nth-child(10) {
    animation-delay: 0.9s;
  }
  h1 span:nth-child(11) {
    animation-delay: 1s;
  }
  @media screen and (max-width: 550px) {
    h1 {
      height: 75px;
    }
    h1 span {
      font-size: 2rem;
    }
  }
`;

export default function Main() {
  return (
    <StyledMain className="eng">
      <BouncedText>
        <h1>
          <span>안</span>
          <span>녕</span>
          <span>하</span>
          <span>세</span>
          <span>요</span>
          <span>.</span>
        </h1>
      </BouncedText>
      <BouncedText>
        <h1>
          <span>주</span>
          <span>니</span>
          <span>어</span>
          <span> </span>
          <span>송</span>
          <span>명</span>
          <span>수</span>
          <span>입</span>
          <span>니</span>
          <span>다</span>
          <span>.</span>
        </h1>
      </BouncedText>
    </StyledMain>
  );
}
