import React, { useRef, useEffect } from "react";
import "../styles/home.scss";
import { imagesData } from "../utils/sampleData";
import Footer from "./components/Footer/index";
import GalleryItem from "./components/galleryItem";
import NavBar from "./components/Navbar/index";
import LocomotiveScroll from "locomotive-scroll";
import "../../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

const Index = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: "horizontal",
      });
    }
  }, []);

  const images = imagesData.map((tupples, index) => {
    return tupples.map((url, elementIndex) => (
      <GalleryItem
        key={url}
        index={elementIndex}
        src={url}
        columnOffset={index * 14}
      />
    ));
  });

  return (
    <div className="home">
      <NavBar />
      <div className="main-container">
        <div className="scroll-container" data-scroll-container ref={ref}>
          <div className="content">
            <div className="gallery">
              {images}
              <div className="behind-text fill" data-scroll-speed data-scroll>
                get lost in adventure
              </div>
              <div
                className="behind-text outline"
                data-scroll-speed
                data-scroll
              >
                get lost in adventure
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
