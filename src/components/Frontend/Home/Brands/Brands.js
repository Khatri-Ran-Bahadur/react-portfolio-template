import React from "react";
import img1 from "../../../../resources/img/brands/logo1.png";
import img2 from "../../../../resources/img/brands/logo2.png";
import img3 from "../../../../resources/img/brands/logo3.png";
import img4 from "../../../../resources/img/brands/logo4.png";
import img5 from "../../../../resources/img/brands/logo5.png";
import img6 from "../../../../resources/img/brands/logo6.png";
import img7 from "../../../../resources/img/brands/logo7.png";
import img8 from "../../../../resources/img/brands/logo8.png";
import img9 from "../../../../resources/img/brands/logo9.png";
const brands = [
  {
    id: 1,
    image: img1,
    alt: "Brand 1"
  },
  {
    id: 2,
    image: img2,
    alt: "Brand 2"
  },
  {
    id: 3,
    image: img3,
    alt: "Brand 3"
  },
  {
    id: 4,
    image: img4,
    alt: "Brand 4"
  },
  {
    id: 5,
    image: img5,
    alt: "Brand 5"
  },
  {
    id: 6,
    image: img6,
    alt: "Brand 6"
  },
  {
    id: 7,
    image: img7,
    alt: "Brand 7"
  },
  {
    id: 8,
    image: img8,
    alt: "Brand 8"
  },
  {
    id: 9,
    image: img9,
    alt: "Brand 9"
  }
];
const Brands = () => {
  return (
    <section className="brand-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-12 col-md-12">
            <div className="first-row row">
              {brands &&
                brands.map((item, i) => (
                  <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                    <div className="single-brand">
                      <img src={item.image} alt={item.alt} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12">
            <div className="experience-area">
              <div className="d-flex flex-row years-area">
                <h2 className="p-3 years">10</h2>
                <h2>
                  <span>Years</span>
                  <span>Experience</span>
                  <span>Working</span>
                </h2>
              </div>
              <div className="d-flex flex-row flex-wrap call-area">
                <span>
                  <i className="fas fa-phone-alt fa-3x px-3"></i>
                </span>
                <div className="call-now">
                  <a href="#" className="text-uppercase h4 font-roboto">
                    Call Now
                  </a>
                  <span className="font-roboto py-2">(+977) 9868620708</span>
                </div>
              </div>
              <div className="bg-panel"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
