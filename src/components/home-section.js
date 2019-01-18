import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './layout.css'
import './home.css'
import img from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js'


const Home = () => (


<section id="home">
    <div className="container">
        <div className="row text-center">
            <div className="col-sm-12">
                <div className="visible-xs">
                    <img src={img} className="logo" alt="Home" width="192" height="192"/>
                </div>
            </div>
        <div className="col-sm-12">
                <p id="main-message" className="text-extra-large editable">
                Design should be simple.<br/>
          In our eyes, perfection is when there is nothing else to remove.
                </p>
            </div>
        </div>
    </div>
</section>
)


export default Home
