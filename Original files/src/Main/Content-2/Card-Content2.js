import React, { Component } from 'react'
import './Card-Content2.css'



export default class CardContent2 extends Component {
    render() {
        return (
            <>
                <section className='card'>
                   <div>
                    <img src={this.props.image} alt="" />
                   </div>

                   <h3>{this.props.title}</h3>
                   <p>Esteem spirit temper too say adieus who direct esteem.</p>
                   <a href="#">Learn More</a>
                </section>
            </>
        )
    }
}
