import React from "react";
import img1 from "../../../../resources/img/services/s-1.png";
import img2 from "../../../../resources/img/services/s-2.png";
import img3 from "../../../../resources/img/services/s-3.png";
import img4 from "../../../../resources/img/services/s-4.png";

const services = [
  {
    image: img1,
    title: "Wp developer",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    image: img2,
    title: "ux/ui desing",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    image: img3,
    title: "web design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    image: img4,
    title: "seo optimize",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  }
];
const Services = () => {
  return (
    <section className="services-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center services-title">
            <h1 className="text-uppercase title-text">Services Offers</h1>
            <p className="para">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </div>
        </div>
        <div className="container services-list">
          <div className="row">
            {services &&
              services.map((item, i) => (
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="services">
                    <div className="sevices-img text-center py-4">
                      <img src={item.image} alt="Services-1" height="65" />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title text-uppercase font-roboto">
                        {item.title}
                      </h5>
                      <p className="card-text text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
