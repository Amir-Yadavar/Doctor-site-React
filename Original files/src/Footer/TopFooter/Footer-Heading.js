import React, { Component } from 'react'
import './Footer-Heading.css'

export default class Footerheading extends Component {
  render() {
    return (
      <>
        <section className='container-fluid'>
          <section className='row footer-top'>
            
            <section className='col-12 col-lg-6 d-flex'>
              
              <section>
                <h3>Make an Online Appointment</h3>
                <h4>Esteem spirit temper too say adieus.</h4>
              </section>
              <button className='btn btn-outline-light'>Make an Appointment</button>

            </section>

            <section className='col-12 col-lg-6'>
              
              <button className='btn btn-outline-dark'>+10 378 4673 467</button>
              <section>
                <h3>For Any Emergency Contact</h3>
                <h4>Esteem spirit temper too say adieus</h4>
              </section>

            </section>
          </section>
        </section>
      </>
    )
  }
}
