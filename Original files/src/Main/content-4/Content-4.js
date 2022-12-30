import React, { Component } from 'react'
import './Content-4.css'
import { MdOutlineDoubleArrow } from 'react-icons/md'

export default class Contentfour extends Component {
    render() {
        return (
            <>
                <section className='container-fluid p-0 container-four'>
                    <section className='d-flex row'>
                        <section className=' col-12 col-md-6 d-flex justify-content-center'>
                            <section className='left d-flex flex-column align-items-center justify-content-center'>
                                <h2 className='p-3'>Welcome to Medicare Center</h2>
                                <p className='p-3'>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That why its crucial that, as women, our behavior on the job is beyond reproach.</p>

                                <section className='d-flex'>
                                    <span className='px-2'><MdOutlineDoubleArrow /></span> <p>Women face higher conduct standards especially in the workplace that’s why it’s crucial that.</p>
                                </section>
                                <section className='d-flex'>
                                    <span className='px-2'><MdOutlineDoubleArrow /></span> <p>Women face higher conduct standards especially in the workplace that’s why it’s crucial that.</p>
                                </section>
                                <section className='d-flex'>
                                    <span className='px-2'><MdOutlineDoubleArrow /></span> <p>Women face higher conduct standards especially in the workplace that’s why it’s crucial that.</p>
                                </section>

                            </section>
                        </section>

                        <section className='right  col-12 col-md-6 d-flex justify-content-center align-items-center my-2'>
                            <section className='d-flex flex-column justify-content-around align-items-center p-5 text-white'>
                                <h2>Doctors Time table</h2>
                                <p>Mon to Friday -- 07.00 AM to 10.00 PM</p>
                                <p>Mon to Friday -- 07.00 AM to 10.00 PM</p>
                                <p>Mon to Friday -- 07.00 AM to 10.00 PM</p>
                                <p>Mon to Friday -- 07.00 AM to 10.00 PM</p>
                                <p>Mon to Friday -- 07.00 AM to 10.00 PM</p>
                                <p>Mon to Friday -- 07.00 AM to 10.00 PM</p>
                            </section>
                            <section className='d-none d-lg-block'></section>
                        </section>
                    </section>
                </section>
            </>
        )
    }
}
