import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./globalStyle";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";

const App = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {}, [file]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar setFile={setFile} />
      <Pages file={file} setFile={setFile} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
