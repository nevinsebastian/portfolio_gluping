import React from "react";
import { Image } from "./image";

const openPdf = (pdfUrl) => {
  window.open(pdfUrl, "_blank");
};

export const Gallery = (props) => {
  const handleImageClick = (project) => {
    if (project.pdf) {
      openPdf(project.pdf);
    }
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>
            Explore our latest projects showcasing innovative solutions and creative endeavors in web development, machine learning, AI applications, and more.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4 portfolio-item"
                  >
                    <div
                      className="hover-bg"
                      onClick={() => handleImageClick(d)}
                      style={{ cursor: "pointer" }}
                    >
                      <Image
                        title={d.title}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                        className="img-responsive"
                      />
                      <div className="hover-text">
                        <h4>{d.title}</h4>
                      </div>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
