import React, { Component } from 'react'
import './Content-6.css'

import BoxCunter from './box/BoxCunter'

export default class Contentsix extends Component {

    render() {
        return (
            <>
                <section className='container-six'>
                    <BoxCunter count="8" title="Years" title2="of Experiences" />
                    <BoxCunter count="0" title="Instant" title2="Blood Donors" />
                    <BoxCunter count="1" title="Well Cured" title2="Patients" />
                    <BoxCunter count="5" title="Internal" title2="Stuff Groups" />
                </section>
            </>
        )
    }
}
