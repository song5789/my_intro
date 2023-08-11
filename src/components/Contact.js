import styled from "styled-components";
import { BiLink, BiPhone, BiMailSend, BiLogoGithub } from "react-icons/bi";

const Background = styled.div`
  width: 100%;
  padding: 3rem 5%;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: inherit;
    transition: 0.2s;
  }
  a:hover {
    text-decoration: underline;
    opacity: 0.6;
  }
`;

const Title = styled.p`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin: 0 0 2rem 0;
`;

const ContactInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  box-sizing: border-box;
  font-size: 1.15rem;
  border: 1px solid black;

  @media screen and (max-width: 550px) {
    font-size: 0.8rem;

    h2 + h2 {
      margin-top: 1.8rem;
    }
  }
`;

export default function Contact() {
  return (
    <Background>
      <a name="contact" href="#contact">
        <Title className="eng">
          <BiPhone />
          &nbsp;Contact
          <BiLink />
        </Title>
      </a>
      <ContactInfo>
        <div className="eng">
          <h2>
            <BiMailSend />
            <a href="mailto:zken14@gmail.com" target="_blank" rel="noopener noreferrer">
              &nbsp;zken14@gmail.com
              <BiLink />
            </a>
          </h2>
          <h2>
            <BiLogoGithub />
            <a href="https://github.com/song5789" target="_blank" rel="noopener noreferrer">
              &nbsp;Github
              <BiLink />
            </a>
          </h2>
          <h2></h2>
        </div>
      </ContactInfo>
    </Background>
  );
}
