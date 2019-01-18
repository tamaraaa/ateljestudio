import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './layout.css'
import './services.css'
import img from '../images/a.png'
import img1 from '../images/d.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js'



const Services = ({ siteTitle }) => (
  <section id="services">

    <div className="container">
      <div className="row text-center">
        <div className="col-sm-12">
          <h1 className="heading-large section-color-1">SERVICES</h1>
        </div>
        <div className="col-sm-12">
          <p className="text-large section-color-1">
            What we do is art. <br />
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-xs-6 col-md-6 col-md-offset-3 service-item">
          <div>
            <img src={img1} />
          </div>
          <div>
            <h3 className="section-color-1">DESIGN</h3>
            <p className="section-color-1">
              Need a logo, corporate identity, or any kind of advertising material...
            <br />
              We are the right place for you. </p>
          </div>
        </div>
        <div className="col-xs-6 col-md-6 service-item">
          <div>
            <img src={img} />
          </div>
          <div>
            <h3 className="section-color-1">ARCHITECTURE</h3>
            <p className="section-color-1">
              Need a floor plan, interior design, or any kind of architectural ideas...
            <br />
              We are the right place for you. </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Services