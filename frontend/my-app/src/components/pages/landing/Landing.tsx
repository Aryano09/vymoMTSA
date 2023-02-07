/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Services from './Services'
import './../../../styles/landing.css'


const Landing = () => {
  return (
    <div>
        <Header></Header>
        <div  className='landing'></div>
        <Services></Services>
        <Footer></Footer>
    </div>
  )
}

export default Landing