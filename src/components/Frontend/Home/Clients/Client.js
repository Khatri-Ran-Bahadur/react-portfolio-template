import React from "react";
import img1 from "../../../../resources/img/testimonials/t1.jpg";
import img2 from "../../../../resources/img/testimonials/t2.jpg";
const clients = [
  {
    id: 1,
    image: img1,
    name: "Ran Bahadur kc",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt."
  },
  {
    id: 2,
    image: img2,
    name: "Rajan Dangi",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt."
  },
  {
    id: 3,
    image: img2,
    name: "Rajan Dangi",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt."
  },
  {
    id: 4,
    image: img2,
    name: "Rajan Dangi",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt."
  },
  {
    id: 5,
    image: img2,
    name: "Rajan Dangi",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt."
  },
  {
    id: 6,
    image: img2,
    name: "Rajan Dangi",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt."
  }
];

const Client = () => {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <div className="about-title">
              <h1 className="text-uppercase title-h1">Client Say about me</h1>
              <p className="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus, deleniti recusandae. Esse incidunt rem repellendus
                ab voluptates maxime? Nemo, numquam!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container carousel py-lg-5">
        <div className="owl-carousel owl-theme">
          {clients &&
            clients.map((item, i) => (
              <div className="client row" key={i}>
                <div className="col-lg-4 col-md-12 client-img">
                  <img src={item.image} alt="img1" className="img-fluid" />
                </div>
                <div className="col-lg-8 col-md-12 about-client">
                  <h4 className="text-uppercase">{item.name}</h4>
                  <p className="para">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
