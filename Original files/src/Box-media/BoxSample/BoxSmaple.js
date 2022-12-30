import React, { Component } from 'react'
import './BoxSample.css'

export default class BoxSmaple extends Component {
  render() {
    return (
      <section className='box'>
        <section>
            <span>
                <i className={this.props.span}></i>
            </span>
            <h2>{this.props.title}</h2>
        </section>
        <p>{this.props.p}</p>
        <a href="#">{this.props.a}</a>

      </section>
    )
  }
}
