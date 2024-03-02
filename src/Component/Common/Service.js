import React, { Component } from "react";
import Services from "../images/card.jpg";

const Service = () => {
  return (
    <div>
      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Services}
                  className="w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="/" className="btn btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Services}
                  className="w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Service 2</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="/" className="btn btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Services}
                  className="w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Service 3</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="/" className="btn btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
