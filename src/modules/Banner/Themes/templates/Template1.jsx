import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Template1 = ({ data }) => {
  

  return (
    <>
      

      <div class="container ">
        <div class="banner-image">
          <div class="container">
            <div class="row pb-5">
              <div class="col-lg-6 col-md-12 mr-auto pt-5 my-auto">
                <h1 class="display-4 pb-4 weight-500 ">{data.heading}</h1>
                <p class="text-muted lead">{data.data} </p>
                <p class="text-muted lead pb-5">
                  I make YouTube videos and write Blog.{" "}
                </p>
                <a href="#" class="btn btn-primary btn-lg text-white">
                  {" "}
                  {data.btnText}{" "}
                </a>
              </div>
              <div className="col-lg-5">
                <img
                  className="img-fluid"
                  src="https://portfolio-of-bablu.netlify.app/assets/img/banner/my-img1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Template1;
