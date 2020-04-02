import React from "react";
import Layout from "../../hoc/Layout/Layout";
import PageHeader from "../../components/Common/PageHeader";
import img1 from "../../resources/img1/blog/single_blog_1.png";
import img2 from "../../resources/img1/blog/single_blog_2.png";
import img3 from "../../resources/img1/blog/single_blog_3.png";
import img4 from "../../resources/img1/blog/single_blog_4.png";
import Blog from "./Blog/Blog";
import Siderbar from "../../components/Common/Siderbar";

const blogs = [
  {
    image: img1,
    title: "Google inks pact for new 35-storey office",
    details:
      " That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first withoutheaven in place seed it second morning saying.",
    category: "Travel, Lifestyle",
    comment: "03 Comment"
  },
  {
    image: img2,
    title: "Google inks pact for new 35-storey office",
    details:
      " That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first withoutheaven in place seed it second morning saying.",
    category: "Travel, Lifestyle",
    comment: "03 Comment"
  },
  {
    image: img3,
    title: "Google inks pact for new 35-storey office",
    details:
      " That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first withoutheaven in place seed it second morning saying.",
    category: "Travel, Lifestyle",
    comment: "03 Comment"
  },
  {
    image: img4,
    title: "Google inks pact for new 35-storey office",
    details:
      " That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first withoutheaven in place seed it second morning saying.",
    category: "Travel, Lifestyle",
    comment: "03 Comment"
  }
];

const Blogs = () => {
  return (
    <Layout>
      <PageHeader title="Blogs" />
      <section className="blog_area section-padding mt-4 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {blogs &&
                  blogs.map((item, i) => (
                    <Blog
                      image={item.image}
                      title={item.title}
                      details={item.details}
                      category={item.category}
                      comment={item.comment}
                    />
                  ))}

                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Next">
                        <i className="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-lg-4">
              <Siderbar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
