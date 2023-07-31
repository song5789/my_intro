import Nav from "./components/Nav";
import "./css/global.css";
import GradienBG from "./components/GradienBG";
import Main from "./components/Main";
import Skils from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <GradienBG>
      <Nav />
      <Main />
      <Skils />
      <Portfolio />
      <Contact />
    </GradienBG>
  );
}
