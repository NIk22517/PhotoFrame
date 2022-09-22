import React from "react";
import { Routes, Route } from "react-router-dom";
import ChooseFrames from "./ChooseFrames";

import ImageUploader from "./ImageUploader";
import UploadedPhotoWithFrame from "./UploadedPhotoWithFrame";

const Pages = ({ file, setFile }) => {
  return (
    <>
      <Routes>
        <Route
          exact
          path='/'
          element={<ImageUploader file={file} setFile={setFile} />}
        />

        <Route exact path='/choose-frame' element={<ChooseFrames />} />

        <Route
          exact
          path='/:framename'
          element={<UploadedPhotoWithFrame file={file} />}
        />
      </Routes>
    </>
  );
};

export default Pages;
