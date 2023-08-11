import styled from "styled-components";
import { MdBuild } from "react-icons/md";
import { SiHtml5, SiCss3, SiJavascript, SiStyledcomponents, SiReact, SiNodedotjs, SiNextdotjs, SiSpring } from "react-icons/si";
import { BiLink } from "react-icons/bi";
import { motion } from "framer-motion";
import { useRef } from "react";

const SkilsBackground = styled.div`
  width: 90%;
  margin: 0rem auto 3rem auto;
  background: #fff;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.8);
  a {
    text-decoration: none;
    color: inherit;
    transition: 0.2s;
  }

  a:hover {
    text-decoration: underline;
    opacity: 0.6;
  }

  .flex-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 550px) {
    .flex-container {
      flex-direction: column;
    }
  }
`;
const SkilsTilte = styled.p`
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin: 0 0 2rem 0;
`;
const SkilsContainer = styled.div`
  width: ${(props) => props.width || "10%"};
  border-radius: 25px;
  padding: 3rem 2rem;
  box-sizing: border-box;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.8);
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  & > div {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  &:hover {
    transform: translateY(-5%);
  }
  h6 {
    margin: 0 0 1.5rem 0;
  }
  .tech {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tech > div {
    font-size: 1rem;
  }
  .t-two {
    width: calc(100% / 2);
  }
`;

const StyledMotion = styled(motion.div)`
  width: 45%;
  & + &:not(:nth-child(3)) {
    margin-left: 1rem;
  }
  @media screen and (max-width: 550px) {
    width: 100%;

    & + &:not(:nth-child(3)) {
      margin: 0;
    }
  }
`;

export default function Skils() {
  const view = useRef(null);
  const container = {
    up: { transform: "translateY(-20%)", opacity: 0 },
    down: { transform: "translateY(0%)", opacity: 1 },
  };

  const delayHandler = (delay) => {
    return {
      duration: 0.5,
      delay,
    };
  };

  return (
    <>
      <SkilsBackground>
        <a name="skils" href="#skils">
          <SkilsTilte>
            <MdBuild />
            &nbsp;사용 기술
            <BiLink />
          </SkilsTilte>
        </a>
        <div className="flex-container">
          <StyledMotion initial="up" whileInView="down" variants={container} viewport={{ once: true, amount: 0.8 }} transition={delayHandler(0.2)}>
            <SkilsContainer width={"100%"}>
              <h6 className="eng">HTML</h6>
              <div>
                <div className="tech">
                  <SiHtml5 style={{ color: "tomato" }} />
                  <div>HTML</div>
                </div>
                <div className="tech">
                  <SiCss3 style={{ color: "#1b73f7" }} />
                  <div>CSS</div>
                </div>
                <div className="tech">
                  <SiJavascript style={{ color: "#f7d023", background: "#000" }} />
                  <div>JS</div>
                </div>
              </div>
            </SkilsContainer>
          </StyledMotion>
          <StyledMotion initial="up" whileInView="down" variants={container} viewport={{ once: true, amount: 0.8 }} transition={delayHandler(0.4)}>
            <SkilsContainer width={"100%"}>
              <h6 className="eng">Frontend</h6>
              <div className="tech">
                <SiReact style={{ color: "#20dcf5" }} />
                <div>React</div>
              </div>
            </SkilsContainer>
          </StyledMotion>
          <StyledMotion initial="up" whileInView="down" variants={container} viewport={{ once: true, amount: 0.8 }} transition={delayHandler(0.6)}>
            <SkilsContainer width={"100%"}>
              <h6 className="eng">Backend</h6>
              <div>
                <div className="tech t-two">
                  <SiNodedotjs style={{ color: "#32b83a" }} />
                  <div>Node.js</div>
                </div>
                <div className="tech t-two">
                  <SiSpring style={{ color: "#2fbd38" }} />
                  <div>Spring Boot</div>
                </div>
              </div>
            </SkilsContainer>
          </StyledMotion>
          <StyledMotion initial="up" whileInView="down" variants={container} viewport={{ once: true, amount: 0.8 }} transition={delayHandler(0.8)}>
            <SkilsContainer width={"100%"}>
              <h6 className="eng">FrameWork</h6>
              <div className="tech">
                <SiNextdotjs />
                <div>Next.js</div>
              </div>
            </SkilsContainer>
          </StyledMotion>
        </div>
      </SkilsBackground>
    </>
  );
}
