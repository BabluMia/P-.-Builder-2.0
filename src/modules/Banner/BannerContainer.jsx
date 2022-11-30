import React, { useState } from "react";
import { handleInputs } from "../Helpers/HandleInputs";
import banner from "../../assets/Images/banner/banner1.png";
import banner2 from "../../assets/Images/banner/banner2.png";
import banner3 from "../../assets/Images/banner/banner3.png";
import "./Banner.css";
import swal from "sweetalert";
import SelectedBanner from "./Themes/SelectedBanner";
import "./Banner.css";
import BannerSlider from "./Slider/BannerSlider";

const BannerContainer = () => {
  const [design, setdesign] = useState(1);
  const [data, setData] = useState({
    heading: `Hi, I'm John Deo.`,
    data: `A freelance Web developer from London. I convert custom web
    designs to bootstrap templates.`,
    btnText: `I'M AVAILABLE`,
  });

  const banners = [
    {
      id: 1,
      img: banner,
    },
    {
      id: 2,
      img: banner2,
    },
    {
      id: 3,
      img: banner3,
    },
  ];

  return (
    <div>
      <div>
        <BannerSlider banners={banners} setdesign={setdesign} />
      </div>
      <SelectedBanner data={data} design={design} />
      <div>
        <div className="box-wrapper">
          <div className="d-flex align-items-center gap-3 package-head">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 2.66602C14.6815 2.66602 13.3925 3.05701 12.2962 3.78955C11.1999 4.52209 10.3454 5.56329 9.8408 6.78146C9.33622 7.99963 9.2042 9.34008 9.46143 10.6333C9.71867 11.9265 10.3536 13.1144 11.286 14.0467C12.2183 14.9791 13.4062 15.614 14.6994 15.8713C15.9926 16.1285 17.333 15.9965 18.5512 15.4919C19.7694 14.9873 20.8106 14.1328 21.5431 13.0365C22.2757 11.9402 22.6667 10.6512 22.6667 9.33268C22.6667 7.56457 21.9643 5.86888 20.714 4.61864C19.4638 3.36839 17.7681 2.66602 16 2.66602ZM16 13.3327C15.2089 13.3327 14.4355 13.0981 13.7777 12.6586C13.1199 12.219 12.6072 11.5943 12.3045 10.8634C12.0017 10.1325 11.9225 9.32825 12.0769 8.55232C12.2312 7.7764 12.6122 7.06367 13.1716 6.50426C13.731 5.94485 14.4437 5.56388 15.2196 5.40954C15.9956 5.2552 16.7998 5.33441 17.5307 5.63716C18.2616 5.93991 18.8864 6.4526 19.3259 7.1104C19.7654 7.7682 20 8.54156 20 9.33268C20 10.3935 19.5786 11.411 18.8284 12.1611C18.0783 12.9113 17.0609 13.3327 16 13.3327ZM28 27.9993V26.666C28 24.1907 27.0167 21.8167 25.2663 20.0664C23.516 18.316 21.142 17.3327 18.6667 17.3327H13.3333C10.858 17.3327 8.48401 18.316 6.73367 20.0664C4.98333 21.8167 4 24.1907 4 26.666V27.9993H6.66667V26.666C6.66667 24.8979 7.36905 23.2022 8.61929 21.952C9.86953 20.7017 11.5652 19.9993 13.3333 19.9993H18.6667C20.4348 19.9993 22.1305 20.7017 23.3807 21.952C24.631 23.2022 25.3333 24.8979 25.3333 26.666V27.9993H28Z"
                fill="black"
              />
            </svg>

            <h3>Add Banner</h3>
          </div>
          <div className="personal_info mt-5 p-4 mb-4">
            <div className="personal_info_top mb-4">
              <h3>Create Banner</h3>
              <p>Please check your personal details here</p>
            </div>
            <hr />
            <div className="persional_info_form">
              <div className="row my-4">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label align-self-center">
                  Title<span className="require_mark">*</span>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Antu"
                    name="heading"
                    value={data["heading"]}
                    onChange={(e) => handleInputs(e, setData)}
                  />
                </div>
              </div>
              <div className="row my-4">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label align-self-center">
                  Details<span className="require_mark">*</span>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    as="textarea"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Antu"
                    name="data"
                    value={data["data"]}
                    onChange={(e) => handleInputs(e, setData)}
                  />
                </div>
              </div>
              <div className="row my-4">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label align-self-center">
                  Button Text<span className="require_mark">*</span>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Antu"
                    name="btnText"
                    value={data["btnText"]}
                    onChange={(e) => handleInputs(e, setData)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContainer;
