import React, { Component } from "react";

const Footer = () => {
  return (
    <div className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p className="text-white">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a href="/AboutUs">AboutUs</a>
            </div>
            <div>
              <a href="/ContactUs">ContactUs</a>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <div>
              <p className="text-white mb-1">Addis Abeba, Ethiopia</p>
            </div>
            <div>
              <p className="text-white mb-1">+251916799994</p>
            </div>
            <div>
              <p className="text-white mb-1">abdibekelebeyene@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
