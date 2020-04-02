import React from "react";

const Blog = ({ image, title, details, category, comment }) => {
  return (
    <article className="blog_item">
      <div className="blog_item_img">
        <img className="card-img rounded-0" src={image} alt="" />
        <a href="#" className="blog_item_date">
          <h3>15</h3>
          <p>Jan</p>
        </a>
      </div>

      <div className="blog_details">
        <a className="d-inline-block" href="single-blog.html">
          <h2>{title}</h2>
        </a>
        <p>{details}</p>
        <ul className="blog-info-link">
          <li>
            <a href="#">
              <i className="fa fa-user"></i> {category}
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-comments"></i> {comment}
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Blog;
