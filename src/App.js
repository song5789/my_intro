import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const MainBodyStyles = createGlobalStyle`
body{
  margin:0;
}
`;

function App() {
  return (
    <>
      <MainBodyStyles />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </>
  );
}

export default App;
