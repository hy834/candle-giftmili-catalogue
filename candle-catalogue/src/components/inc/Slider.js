import React from "react";
import Slider1 from "../images/slider1.jpg";
import Slider2 from "../images/slider2.jpg";
import Slider3 from "../images/slider3.jpg";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function Slider() {
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-1 d-flex align-items-center justify-content-center">
                  <button className="btn btn-light p-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{ height: "20vh", backgroundColor: "pink"  }}>
                      <BsChevronLeft size={32} />
                  </button>
              </div>
              <div className="col-md-10">
                  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: "20px", borderRadius: "15px", overflow: "hidden" }}>
                      <div className="carousel-inner">
                          <div className="carousel-item active">
                              <img src={Slider1} className="d-block mx-auto" alt="..." style={{ width: "120vh", maxHeight: "90vh", borderRadius: "15px" }} />
                          </div>
                          <div className="carousel-item">
                              <img src={Slider2} className="d-block mx-auto" alt="..." style={{ width: "120vh", maxHeight: "90vh", borderRadius: "15px" }} />
                          </div>
                          <div className="carousel-item">
                              <img src={Slider3} className="d-block mx-auto" alt="..." style={{ width: "120vh", maxHeight: "90vh", borderRadius: "15px" }} />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-1 d-flex align-items-center justify-content-center">
                  <button className="btn btn-light p-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{ height: "20vh" , backgroundColor: "pink" }}>
                      <BsChevronRight size={32} />
                  </button>
              </div>
          </div>
      </div>
  );
}

export default Slider;
