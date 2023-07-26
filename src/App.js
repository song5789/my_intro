import Nav from "./components/Nav";
import "./css/global.css";
import GradienBG from "./components/GradienBG";
import Main from "./components/Main";
import Skils from "./components/Skills";

function App() {
  return (
    <GradienBG>
      <Nav />
      <Main />
      <Skils />
    </GradienBG>
  );
}

export default App;
