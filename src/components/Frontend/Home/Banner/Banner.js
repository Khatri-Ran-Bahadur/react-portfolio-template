import React from "react";
import banner from "../../../../resources/img/banner/2.png";
const Banner = () => {
  return (
    <section className="site-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 site-title">
            <h1 className="title-text text-uppercase">I am RN</h1>
            <h4 className="title-text text-uppercase">
              Senior Fullstackvvmw Developer
            </h4>
            <p>My name is Ran bahadur kc. i am from west rukum Nepal </p>
            <div className="site-buttons">
              <div className="d-flex flex-row flex-wrap">
                <button
                  type="button"
                  className="btn button btn-style-two mr-4 text-uppercase"
                >
                  hire me
                </button>
                <button
                  type="button"
                  className="btn button btn-style-two text-uppercase"
                >
                  Get cv
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 banner-image">
            <img src={banner} alt="banner-img" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
