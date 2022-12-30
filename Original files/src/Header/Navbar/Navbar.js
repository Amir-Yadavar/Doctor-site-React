import './navbar.css'
import './LocalNav.css'
function Navbar() {
    return (

        <section className='conteiner'>
            <section>
                <span>Logo</span>
                <h3>Mediacare</h3>
            </section>
            <input type="checkbox" id="check" hidden></input>
            <section className='nav-mobile'>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">DEPARTMENT</a></li>
                    <li><a href="#">PAGES</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </section>

            <section>
                <span><i class="fa fa-search"></i></span>
            </section>
            
            <label htmlFor="check">
                <span>|||</span>
            </label>

        </section>

    )
}

export default Navbar