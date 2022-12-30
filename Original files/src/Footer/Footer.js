import React, { Component } from 'react'
import './Footer.css'
import Footerheading from './TopFooter/Footer-Heading'
import MainFooter from './MainFooter/MainFooter'
import BottomFooter from './BottomFooter/BottomFooter'

export default class Footer extends Component {
  render() {
    return (
      <>
        <section className='footer'>
          <Footerheading />
          <MainFooter />
          <BottomFooter/>
        </section>
      </>
    )
  }
}
