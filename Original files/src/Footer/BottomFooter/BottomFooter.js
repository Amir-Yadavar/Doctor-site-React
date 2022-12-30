import React, { Component } from 'react'
import './BottomFooter.css'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { SiGmail} from 'react-icons/si'

export default class BottomFooter extends Component {
    render() {
        return (
            <>
                <section className='bottom-footer'>
                    <section>
                        <p>Website Made By Amir Yadavar</p>
                        <p>amiresya@gmail.com</p>
                        <section>
                            <a href="https://instagram.com/amir_yadavar_?igshid=YmMyMTA2M2Y="><span><BsInstagram/></span></a>
                            <a href="amiresya@gmail.com"><span><SiGmail/></span></a>
                            <a href="https://www.linkedin.com/in/amir-yadavar-269904242/"><span><BsLinkedin/></span></a>
                            <a href="https://github.com/Amir-Yadavar"><span><AiFillGithub/></span></a>
                        </section>
                    </section>
                </section>
            </>
        )
    }
}
