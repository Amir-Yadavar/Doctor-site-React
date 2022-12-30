import React, { Component } from 'react'
import './Doctors.css'
import { ImFacebook2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

export default class Doctors extends Component {
    render() {
        return (
            <>
                <section className='doc'>
                    <img src={this.props.image} alt="" />
                    <h3>{this.props.name}</h3>
                    <h4>Sr. Faculty Data Science</h4>
                    <section>
                        <a href='#'><ImFacebook2 /></a>
                        <a href='#'><BsInstagram /></a>
                        <a href='#'><BsTwitter /></a>
                    </section>
                </section>
            </>
        )
    }
}
