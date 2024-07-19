import React from "react";


// Shape Images
import shape1 from "../../public/images/shape1.png";
import shape2 from "../../public/images/shape2.svg";
import shape3 from "../../public/images/shape3.svg";
import shape4 from "../../public/images/shape4.svg";
import shape5 from "../../public/images/shape5.png";

const PageBanner = ({ pageTitle }) => {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h2>{pageTitle}</h2>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src={shape1} alt="shape" width={202} height={202} />
        </div>
        <div className="shape2 rotateme">
          <img src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <img src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <img src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape5">
          <img src={shape5} alt="shape" width={182} height={146} />
        </div>
        <div className="shape6 rotateme">
          <img src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape7">
          <img src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <img src={shape2} alt="shape" width={22} height={22} />
        </div>
      </div>
    </>
  );
};

export default PageBanner;
