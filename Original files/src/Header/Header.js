import './header.css'
import Navbar from './Navbar/Navbar'
import './LocalHeader.css'

function Header() {
    return (
        <div>
            <section>
                <span className='navcolor'></span>
                <nav>
                    <Navbar />
                </nav>
            </section>

            <header>
                <h2>Growing up your
                    children with our most
                    smart monitization</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</p>

                <button>LEARN MORE</button>
            </header>
        </div>
    )
}

export default Header
