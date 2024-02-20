import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Integration Strategist</title>
        <meta property="og:title" content="Lead Integration Strategist" />
      </Helmet>
    </div>
  )
}

export default Home
