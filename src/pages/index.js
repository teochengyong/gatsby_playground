import React from 'react'
import Link from 'gatsby-link'

export default () => 
    <div style={{color: 'blue'}}>
        <h1>Hello Gatsy!</h1>
        <p>What a world.</p>
        <img src="http://lorempixel.com/400/200" alt=""/>
        <br/>
        <Link to="/my-second-gatsby-page">Second Page</Link>
        <br/>
        <Link to="/counter">Counter</Link>
    </div>
