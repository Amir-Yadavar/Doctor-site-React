import React, { Component } from 'react'
import './BoxCunter.css'

export default class BoxCunter extends Component {
  render() {
    return (
      <>
      <section className='box-cunter'>
        <h2><span>{this.props.count}</span>K+</h2>
        <h4>{this.props.title}</h4>
        <h4>{this.props.title2}</h4>
      </section>
      </>
    )
  }
}
