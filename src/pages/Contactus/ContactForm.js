import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form container">
      <form className="form">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Full Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Full Name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Full Email"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Phone </label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Full Phone"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Address</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Full Address"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
