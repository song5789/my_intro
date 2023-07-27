import styled, { ThemeProvider, css } from "styled-components";

const StyledMain = styled.div`
  width: 70%;
  background: #2d2d2e;
  color: #fff;
  margin: 15rem auto;
  border-radius: 10px;
`;
const StyledTop = styled.div`
  width: 100%;
  height: 35px;
  background: #505052;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
`;
const StyledCodeBook = styled.div`
  padding: 0.5rem 1.2rem;
  box-sizing: border-box;

  .text h1 {
    font-size: 2.2rem;
    min-width: 1rem;
    white-space: nowrap;
    color: transparent;
    position: relative;
  }
  .text h1::before {
    color: #fff;
    width: 100%;
    heigth: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .one {
    width: 210px;
  }
  .one h1::before {
    content: "안녕하세요.";
    animation: typing 1.8s steps(6);
  }
  .two {
    width: 535px;
  }
  .two h1::before {
    content: "개발자를 꿈꾸는 송명수입니다.";
    width: 0%;
    animation: typing 1.6s steps(14) forwards;
    animation-delay: 1.8s;
  }
`;

const Circles = styled.div`
  ${(props) => {
    const propsColor = props.theme.palette[props.color];
    return css`
      background: ${propsColor};
    `;
  }}
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

export default function Main() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          green: "#5fff59",
          yellow: "#fae62f",
          red: "#fc221e",
        },
      }}
    >
      <div style={{ height: "52vh" }}>
        <StyledMain className="eng">
          <StyledTop>
            <Circles color="green" />
            <Circles color="yellow" />
            <Circles color="red" />
          </StyledTop>
          <StyledCodeBook>
            <div className="text one">
              <h1>안녕하세요.</h1>
            </div>
            <div className="text two">
              <h1>개발자를 꿈꾸는 송명수입니다.</h1>
            </div>
          </StyledCodeBook>
        </StyledMain>
      </div>
    </ThemeProvider>
  );
}
