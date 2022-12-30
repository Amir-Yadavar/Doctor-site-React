import './content-1.css'
import './LocalContent-1.css'
import {GiConfirmed} from 'react-icons/gi'

import React, { Component } from 'react'

export default class Contentfirst extends Component {
    render() {
        return (
            <>
                <section className='conteiner-content1'>
                    <section>
                        <div></div>
                        <div></div>
                    </section>

                    <section>
                        <article>
                            <h3><span></span> Welcome to Docmed</h3>
                            <h2>Best Care For Your Good Health</h2>
                            <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                            <div><span><GiConfirmed/></span>Apartments frequently or motionless.</div>
                            <div><span><GiConfirmed/></span>Duis aute irure dolor in reprehenderit in voluptate.</div>
                            <div><span><GiConfirmed/></span>Voluptatem quia voluptas sit aspernatur.</div>
                            <button>Learn More</button>
                        </article>
                    </section>
                </section>
            </>
        )
    }
}
