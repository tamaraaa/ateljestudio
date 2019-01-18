import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import { location } from 'gatsby'
import Header from './header'
import Home from './home-section'
import Services from './services'
import Portfolio from './portfolio'
import About from './about'
import Footer from './footer'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';









const Layout = ({ children, data, location }) => {
  console.log(data)
  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={(location) => (
        <>

          {/* <Header />
        
        <Home/>
        <Services/>
        <Portfolio data={data}/>
        <About/>
        <Footer/> */}



          )   }
      </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default Layout
