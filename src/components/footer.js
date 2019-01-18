import React from 'react'
import { Link } from 'gatsby'
import './footer.css'
import './layout.css'
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance, FaInstagram, FaLinkedin, FaGooglePlusG } from 'react-icons/fa';
import img from '../images/logo-text-right.png'


const Footer = () => (
  <footer>
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-12">
          <ul class="social list-inline">
            <li>
              <div className='font-awesom'>
                <a href="index.html#" class="facebook">
                  <FaFacebookF size="30" />
                </a>
              </div>
            </li>
            <li>
              <div className='font-awesom'>
                <a href="index.html#" class="twitter">
                  <FaTwitter size="30" />
                </a>
              </div>
            </li>
            <li>
              <div className='font-awesom'>
                <a href="index.html#" class="dribbble">
                  <FaDribbble size="30" />
                </a>
              </div>
            </li>
            <li>
              <div className='font-awesom'>
                <a href="index.html#" class="behance">
                  <FaBehance size="30" />
                </a>
              </div>
            </li>
            <li>
              <div className='font-awesom'>
                <a href="index.html#" class="instagram">
                  <FaInstagram size="30" />
                </a>
              </div>
            </li>
            <li>
              <div className='font-awesom'>
                <a href="index.html#" class="linkedin">
                  <FaLinkedin size="30" />
                </a>
              </div>
            </li>
            <li>
              <div className='font-awesom'>
                <a href="index.html#" class="google-plus">
                  <FaGooglePlusG size="30" />
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-sm-12">
          <ul class="subnav list-inline">
            <li><a href="index.html#services">Services</a></li>
            <li><a href="index.html#portfolio">Portfolio</a></li>
            <li><a href="index.html#about">About</a></li>
            <li><Link to='/contact/'>CONTACT</Link></li>
          </ul>
        </div>

        <div class="col-sm-12">
          <a href="index.html#">
            <img src={img} class="logo" alt="logo" />
          </a>
        </div>

      </div>

    </div>

  </footer>


)
export default Footer