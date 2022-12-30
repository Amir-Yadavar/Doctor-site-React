import React, { Component } from 'react'
import './MainFooter.css'
import { ImFacebook2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

export default class MainFooter extends Component {
    render() {
        return (
            <>
                <section className='mainfooter'>
                    <section>
                        <a href="#"></a>
                        <p>Firmament morning sixth subdue darkness creeping gathered divide.</p>
                        <section>
                            <a href='#'><span className='item-span'><ImFacebook2 /></span></a>
                            <a href='#'><span className='item-span'><BsInstagram /></span></a>
                            <a href='#'><span className='item-span'><BsTwitter /></span></a>
                        </section>
                    </section>
                    
                    <section>
                        <h4>Departments</h4>
                        <a href="#">Eye Care</a>
                        <a href="#">Skin Care</a>
                        <a href="#">Pathology</a>
                        <a href="#">Medicine</a>
                        <a href="#">Dental</a>
                    </section>
                    
                    <section>
                        <h4>Useful Links</h4>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Appointment</a>
                    </section>
                    
                    <section>
                        <h4>Address</h4>
                        <p>200, D-block, Green lane USA</p>
                        <p>Tel : +10 367 467 8934</p>
                        <p>Mail : docmed@contact.com</p>
                    </section>
                </section>
            </>
        )
    }
}
