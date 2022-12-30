import React, { Component } from 'react'
import './Content-2.css'
import './LocalContent-2.css'
import CardContent2 from './Card-Content2'

export default class Contentsecond extends Component {
    render() {
        return (
            <>
                <section className='content-2-container'>
                    <section>
                        <h2>Our Departments<span></span></h2>

                        <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.</p>
                    </section>

                    <section>
                        <CardContent2 title="Dental Care" image="img-proje/img-content-2/1.webp"/>
                        <CardContent2 title="Physical Therapy" image="img-proje/img-content-2/2.webp"/>
                        <CardContent2 title="Eye Care" image="img-proje/img-content-2/3.webp"/>
                        <CardContent2 title="Surgery Service" image="img-proje/img-content-2/4.webp"/>
                        <CardContent2 title="Skin Surgery" image="img-proje/img-content-2/5.webp"/>
                        <CardContent2 title="Diagnostic Test" image="img-proje/img-content-2/6.webp"/>
                    </section>
                </section>

            </>
        )
    }
}
