import React from "react";
//import Typist from 'react-typist';
//import { Container, Row, Col } from 'reactstrap';
import "../style.min.css";

const Banner = () => {
  return (
    <section class="getready sec-grad-yellow-to-black-right scrollme">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="column-support-txt animateme" data-when="enter" data-from="1" data-to="0" data-opacity="1" data-translatex="-60" data-easeinout="0">
            <div class="column-support-title">Watch Antler Data Center</div>
            <div class="column-support-subtitle">Your services in advanced Data Centers and Infrastructures.</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="btn-floats">
            <a class="btn1 btn-default1-yellow-fill mr-3 popup-youtube" href="http://www.youtube.com/watch?v=0O2aH4XLbto">Video Data Center</a>
            <a href="contact.html" class="btn0 btn0-default1-pink-fill">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
