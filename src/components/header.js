import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'
import './header.css'
import img from '../images/logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="b32e25" light expand="md">
          <NavbarBrand id='hide-brand' href="/">atelje</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='#services'>SERVICES</Link>
              </NavItem>
              <NavItem>
                <Link to='#portfolio'>PORTFOLIO</Link>
              </NavItem>
              <NavItem className='home' isOpen={this.state.isOpen}>
                <Link to='#home'><img src={img} /></Link>
              </NavItem>
              <NavItem>
                <Link to='#about'>ABOUT</Link>
              </NavItem>
              <NavItem>
                <Link to='./contact'>CONTACT</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}