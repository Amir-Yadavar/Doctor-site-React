import React, { Component } from 'react'
import './BoxMedia.css'

import './BoxSample/BoxSmaple'
import BoxSmaple from './BoxSample/BoxSmaple'

export default class BoxMedia extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boxHos: [
                {
                    span: 'fa fa-hospital-o',
                    title: 'Emergency Services',
                    p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                    a: 'Call Us: 215 - 3695 - 9584'
                },
                {
                    span: 'fa fa-clock-o',
                    title: 'Doctors Schedule',
                    p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                    a: 'Learn More'
                },
                {
                    span: 'fa fa-stethoscope',
                    title: 'Online Appointment',
                    p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                    a: 'Get Appointment'
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <section className='conteiner-box'>
                    <BoxSmaple {...this.state.boxHos[0]} />
                    <BoxSmaple {...this.state.boxHos[1]} />
                    <BoxSmaple {...this.state.boxHos[2]} />
                </section>
            </div>
        )
    }
}
