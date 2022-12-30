import React, { Component } from 'react'
import './Content-5.css'
import Doctors from './Doctors'

export default class Contentfive extends Component {
  render() {
    return (
      <>
      <section className='container-five'>
        <h2>Expert Doctors <span></span></h2>

        <section className='doctor'>
            <Doctors image="img-proje/expert/1.webp" name="Ethel Davis"/>
            <Doctors image="img-proje/expert/2.webp" name="Rodney Cooper"/>
            <Doctors image="img-proje/expert/3.webp" name="Dane Walker"/>
            <Doctors image="img-proje/expert/4.webp" name="Lena Keller"/>
        </section>
      </section>
      </>
    )
  }
}
