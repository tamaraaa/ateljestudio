import posed, { PoseGroup } from 'react-pose'
import React, { Component } from 'react'
import Item from './item.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'





class Portfolio extends Component {

  state = {
    cardsToShow: 6,
    cardList: this.props.data.allContentfulPortfolio.edges,
    filterString: ''
  }
  render() {
    const data = this.state.cardList

    const showMore = (e) => {
      e.preventDefault()
      const allCards = data.lenght
      console.log(data.length)
      this.setState({ cardsToShow: allCards })
    }

    const listItems = this.state.cardList.slice(0, this.state.cardsToShow).filter(data => data.node.tags.join().includes(this.state.filterString)).map((data, i) => {return(<Item  data={data} collectData={this.props.collectData} i={String(i)} key={i} />)})
    return (

      <section id="portfolio">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12 col-md-3">
              <h1 className="heading-large section-color-2">PORTFOLIO</h1>
            </div>
            <div className="col-sm-12">
              <p className="text-large section-color-2">
                Examples of our work are shown in galleries below. </p>
            </div>
          </div>
          {this.state.cardsToShow != 6?
          <ul id="filter-buttons">
            <li class="filter active" onClick={() => { this.setState({ filterString: '' }) }} data-filter="all">ALL</li>
            <li class="filter" onClick={() => { this.setState({ filterString: "Design" }) }} data-filter="design">DESIGN</li>
            <li class="filter" onClick={() => { this.setState({ filterString: "Logo" }) }} data-filter="logo">LOGO</li>
            <li class="filter" onClick={() => { this.setState({ filterString: "Branding" }) }} data-filter="branding">BRANDING</li>
            <li class="filter" onClick={() => { this.setState({ filterString: "Arhitecture" }) }} data-filter="architecture">ARCHITECTURE</li>
            <li class="filter" onClick={() => { this.setState({ filterString: "Competition" }) }} data-filter="competition">COMPETITION</li>
          </ul>:""}
          <ul id="gallery" className="row">
          
            

           
               
                <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {listItems}
                </ReactCSSTransitionGroup>
           
              
          </ul>
          <div className="row text-center"> 
          {this.state.cardsToShow == 6?<button onClick={showMore} className="btn btn-2">View All Projects</button>:''}
            
          </div>
        </div>
      </section>
    )

  }
}


export default Portfolio