import styled from "styled-components";
import { motion, useScroll, useSpring } from "framer-motion";
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
  z-index: 10;

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

const ScrollProgress = styled(motion.div)`
  position: sticky;
  top: 80px;
  height: 10px;
  background: #f25f41;
  transform-origin: 0%;
  z-index: 10;
`;

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const mouseIn = (e) => {
    e.target.classList.add("animate__animated");
    e.target.classList.add("animate__heartBeat");
  };
  const mouseOut = (e) => {
    e.target.classList.remove(`animate__animated`);
    e.target.classList.remove("animate__heartBeat");
  };

  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <StyledNav>
        <div className="flex-row eng">
          <div className="btns">
            <a href="#main" onMouseEnter={mouseIn} onMouseLeave={mouseOut} onClick={toTop}>
              Main
            </a>
          </div>
          <div className="btns">
            <a href="#skils" onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
              Skils
            </a>
          </div>
          <div className="btns">
            <a href="#portfolio" onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
              Portfolio
            </a>
          </div>
          <div className="btns">
            <a href="#contact" onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
              Contact
            </a>
          </div>
        </div>
      </StyledNav>
      <ScrollProgress style={{ scaleX }} />
    </>
  );
}
