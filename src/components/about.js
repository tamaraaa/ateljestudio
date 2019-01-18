import React from 'react'
import PropTypes from 'prop-types'

import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import './layout.css'
import './about.css'
import img from '../images/bojan-djordjic.jpg'
import img1 from '../images/marina-nikolic.jpg'
import img2 from '../images/stevan-perovic.jpg'


const About = () => (
    <section id="about">
        <div class="container">

            <div class="row text-center">
                <div class="col-sm-12">
                    <h1 class="heading-large section-color-1">ABOUT US</h1>
                </div>
                <div class="col-sm-12">
                    <p class="text-large section-color-1">
                        This is our team. </p>
                </div>
            </div>

            <div class="row text-center">


                <div class="col-xs-12 col-md-4">
                    <div class="team-member">
                        <div class="header">
                            <span class="name">Marina Nikolic</span>
                            <span class="position">Art Director / Architect</span>
                        </div>
                        <div class="content">
                            <div class="info">
                                <p>I was born in Belgrade in 1989. I finished Architectural-technical high school and
                                    graduated at Faculty of Architecture, University of Belgrade in 2013.</p>
                            </div>
                            <img src={img} alt=""/>
                        </div>
                        <div class="footer">
                            <ul>
                                <li><a href="index.html#"> <FaFacebookF size="18" color='#e74c3c'/></a></li>
                                <li><a href="index.html#"> <FaTwitter size="18" color='#e74c3c'/></a></li>
                                <li><a href="index.html#"> <FaLinkedinIn size="18" color='#e74c3c'/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-md-4">
                    <div class="team-member">
                        <div class="header">
                            <span class="name">Stevan Perovic</span>
                            <span class="position">CEO / Architect</span>
                        </div>
                        <div class="content">
                            <div class="info">
                                <p>I was born in Belgrade in 1988. I graduated at Faculty of Architecture, University of
                                    Belgrade in 2012. Bavim se arhitekturom i grafičkim dizajnom.</p>
                            </div>
                            <img src={img1} alt="Stevan Perovic"/>
                        </div>
                        <div class="footer">
                            <ul>
                                <li><a href="index.html#"> <FaFacebookF size="18" color='#e74c3c'/></a></li>
                                <li><a href="index.html#"> <FaTwitter size="18" color='#e74c3c'/></a></li>
                                <li><a href="index.html#"> <FaLinkedinIn size="18" color='#e74c3c'/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-md-4">
                    <div class="team-member">
                        <div class="header">
                            <span class="name">Bojan Djordjic</span>
                            <span class="position">Art Director / Designer</span>
                        </div>
                        <div class="content">
                            <div class="info">
                                <p>I’m a graphic designer from Belgrade. After primary and high school i graduated at
                                    Belgrade Polytechnic in 2013 with best thesis..</p>
                            </div>
                            <img src={img2} alt="Bojan Djordjic"/>
                        </div>
                        <div class="footer">
                            <ul>
                                <li><a href="index.html#"> <FaFacebookF size="18" color='#e74c3c'/></a></li>
                                <li><a href="index.html#"> <FaTwitter size="18" color='#e74c3c'/></a></li>
                                <li><a href="index.html#"> <FaLinkedinIn size="18" color='#e74c3c'/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section>
)
export default About