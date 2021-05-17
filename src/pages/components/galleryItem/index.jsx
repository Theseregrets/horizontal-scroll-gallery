import React from "react";
import { points } from "../../../utils/sampleData";
import "./style.scss";
import LocomotiveScroll from "locomotive-scroll";
import "../../../../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

const GalleryItem = ({ src, index, columnOffset }) => {
  const values = points[index];
  if (!values) return null;
  const [row, column, spanRow, spanColumn] = values;

  const getScrollIndex = () => {
    if (index === 1 || index === 4) return -1;
    if (index === 0 || index === 3) return 0;
    return 1;
  };

  return (
    <div
      className="gallery-item"
      data-scroll
      data-scroll-speed={getScrollIndex()}
      style={{
        gridArea: `${row}/ ${column +
          columnOffset}/ span ${spanRow} / span ${spanColumn}`,
      }}
    >
      <div className="gallery-item-image">
        <div
          className="gallery-item-imginner"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
};

export default GalleryItem;
