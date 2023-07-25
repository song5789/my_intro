import { motion, useScroll } from "framer-motion";
import Nav from "./components/Nav";
import "./css/global.css";
import GradienBG from "./components/GradienBG";
import Main from "./components/Main";

function App() {
  return (
    <GradienBG>
      <Nav />
      <Main />
    </GradienBG>
  );
}

export default App;
