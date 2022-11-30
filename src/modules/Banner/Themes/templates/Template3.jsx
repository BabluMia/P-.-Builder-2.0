import React from "react";

const Template2 = ({ data }) => {
  return (
    <>
      <div class="container ">
        <div class="banner-image">
          <div class="container">
            <div class="row pb-5">
       
              <div class="col-lg-12 col-md-12 mr-auto pt-5 my-auto text-center">
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
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Template2;
