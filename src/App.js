import { useState, useEffect } from "react";
import GlobalStyle from "./globalStyle";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ImageUploader from "./components/ImageUploader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotoFrame from "./components/PhotoFrame";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    console.log("render");
  }, [file]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar setFile={setFile} />

      <Routes>
        <Route
          path='/'
          element={<ImageUploader file={file} setFile={setFile} />}
        />

        <Route path='/frame' element={<PhotoFrame file={file} />} />

        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
