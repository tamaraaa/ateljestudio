import React, { Component } from 'react'
import Header from './header'
import Home from './home-section'
import Services from './services'
import Portfolio from './portfolio'
import About from './about'
import Footer from './footer'
import Popup from './popup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'
import { Spring } from 'react-spring'

class Wrap extends Component {

  state = {
    activeItem: '',
  };


  collectData = (index) => {
    console.log(this.props.data)
    this.setState({
      activeItem: index ? this.props.data.allContentfulPortfolio.edges[index] : ''

    })
  }


  render() {
    console.log(this.state.activeItem)
    const { activeItem } = this.state
    return (
      <div>
        <Header />
        <Home />
        <Services />
        
        <Portfolio data={this.props.data} collectData={this.collectData} />
        
        <About />
        <Footer />
        <Popup activeItem={activeItem} collectData={this.collectData} />
      </div>
    )
  }
}

export default Wrap