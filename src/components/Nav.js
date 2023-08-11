import styled, { css } from "styled-components";
import { motion, useScroll, useSpring } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import "animate.css";

const StyledNav = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  /*box-shadow: 0px 25px 30px #fff;*/
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 3rem;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 10;

  .btn-container {
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

  @media screen and (max-width: 550px) {
    width: 50vw;
    height: 100vh;
    display: none;
    padding: 2rem 0.5rem;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    transform: translateX(-100%);
    .btn-container {
      flex-direction: column;
    }

    .btns {
      margin-bottom: 2rem;
    }

    ${(props) =>
      props.open &&
      css`
        display: block;
        position: fixed;
        top: 50px;
        transform: translateX(0%);
      `}
  }
`;

const MobileNav = styled.div`
  width: 100%;
  height: 50px;
  display: none;
  background: #fff;
  padding-left: 0.5rem;
  box-sizing: border-box;

  @media screen and (max-width: 550px) {
    display: block;
    position: sticky;
    display: flex;
    align-items: center;
    top: 0;
    z-index: 5;
  }
`;
const MenuButton = styled.div`
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;
  align-content: center;
`;

const ScrollProgress = styled(motion.div)`
  position: sticky;
  top: 80px;
  height: 10px;
  background: #f25f41;
  transform-origin: 0%;
  z-index: 10;

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);
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

  const onToggle = () => {
    setOpen(!open);
  };

  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <MobileNav>
        <MenuButton onClick={onToggle}>{open ? <MdClose /> : <MdMenu />}</MenuButton>
      </MobileNav>
      <StyledNav open={open}>
        <div className="btn-container eng">
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
