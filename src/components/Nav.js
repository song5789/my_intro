import styled from "styled-components";
import "animate.css";

const StyledNav = styled.div`
  width: 100vw;
  height: 80px;
  background: #fff;
  /*box-shadow: 0px 25px 30px #fff;*/
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 4rem;
  box-sizing: border-box;
  position: sticky;
  top: 0;

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .btns {
    margin-left: 3rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s;
  }
  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
  }

  :root {
    --animate-duration: 800ms;
    --animate-delay: 0s;
  }
`;

export default function Nav() {
  const mouseIn = (e) => {
    e.target.classList.add("animate__animated");
    e.target.classList.add("animate__heartBeat");
  };
  const mouseOut = (e) => {
    e.target.classList.remove(`animate__animated`);
    e.target.classList.remove("animate__heartBeat");
  };
  return (
    <>
      <StyledNav>
        <div className="flex-row eng">
          <div className="btns">
            <a href="#about" onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
              About
            </a>
          </div>
          <div className="btns">
            <a href="#skils" onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
              Skils
            </a>
          </div>
          <div className="btns">
            <a href="#project" onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
              Project
            </a>
          </div>
          <div className="btns">
            <a href="#contact" onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
              Contact
            </a>
          </div>
        </div>
      </StyledNav>
    </>
  );
}
