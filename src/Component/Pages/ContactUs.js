import React, { Component } from "react";

const ContactUs = () => {
  return (
    <div>
      <section className="section bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>ContactUs</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">ContactUs / AboutUs</h6>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="main-heading mb-3">Contact form</h6>
                  <div className="form-group">
                    <label className="mb-1">Fullname</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Fullname"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Message</label>
                    <textarea
                      rows="3"
                      className="form-control"
                      placeholder="Type Your Message"
                    ></textarea>
                  </div>
                  <div className="form-group py-3">
                    <button className="btn btn-primary shadow w-100">
                      Send Message
                    </button>
                  </div>
                </div>
                <div className="col-md-6 border-start">
                  <h5 className="main-heading">Address Information</h5>
                  <div className="underline"></div>
                  <p>Addis Abeba, Ethiopia</p>
                  <p>+251916799994</p>
                  <p>abdibekelebeyene@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
