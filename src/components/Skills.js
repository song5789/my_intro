import styled from "styled-components";
import { MdBuild } from "react-icons/md";
import { SiHtml5, SiCss3, SiJavascript, SiStyledcomponents } from "react-icons/si";
import { color } from "framer-motion";

const SkilsBackground = styled.div`
  width: 90%;
  height: 500px;
  margin: 3rem auto;
  background: #fff;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.8);
`;
const SkilsTilte = styled.p`
  height: 50px;
  line-height: 50px;
  font-size: 2rem;
  opacity: 0.8;
  margin: 0 0 1rem 0;
`;
const BasicSkils = styled.div`
  width: 35%;
  border-radius: 25px;
  padding: 3rem 2rem;
  box-sizing: border-box;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.8);
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h6 {
    margin: 0 0 1.5rem 0;
  }

  & > div {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .basic-tech {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .basic-tech > div {
    font-size: 1rem;
  }
  .level {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    font-size: 1rem !important;
    color: #fff;
    opacity: 0;
    transition: 0.3s;
  }
  .level:hover {
    opacity: 1;
  }
`;

export default function Skils() {
  return (
    <SkilsBackground>
      <SkilsTilte>
        <MdBuild />
        &nbsp; &nbsp;사용 기술들
      </SkilsTilte>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <BasicSkils>
          <h6 className="eng">HTML</h6>
          <div>
            <div className="basic-tech">
              <SiHtml5 style={{ color: "tomato" }} />
              <div>HTML</div>
              <div className="level">knowledgeble</div>
            </div>
            <div className="basic-tech">
              <SiCss3 style={{ color: "#1b73f7" }} />
              <div>CSS</div>
              <div className="level">knowledgeble</div>
            </div>
            <div className="basic-tech">
              <SiJavascript style={{ color: "#f7d023" }} />
              <div>JS</div>
              <div className="level">knowledgeble</div>
            </div>
          </div>
        </BasicSkils>
      </div>
    </SkilsBackground>
  );
}
