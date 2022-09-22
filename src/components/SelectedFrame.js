import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { FrameData } from "../frameData";

const SelectedFrame = () => {
  const name = useParams();

  const filterData = FrameData.filter((item) =>
    item.frame_path === name.framename ? item : ""
  );
  console.log(filterData);
  return (
    <div>
      {filterData.map((frame) => {
        return (
          <Fragment key={frame.id}>
            <img src={frame.frame_image} alt='' />
          </Fragment>
        );
      })}
    </div>
  );
};

export default SelectedFrame;
