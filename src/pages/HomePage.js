import { useState } from 'react'
import MenuBtn from '../components/MenuBtn/MenuBtn'
import style from './HomePage.module.css'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.webp'
import MiddleSec from '../components/MiddleSec'
import Footer from '../components/Footer/Footer'

function HomePage() {
    const [isopen, setIsopen] = useState(false)
    const navigate = useNavigate()
    return (
        <div className={style.parent}>
            <div className={isopen ? `${style.sideNav} ${style.slide}` : style.sideNav}>
                <nav>
                    <ul className={style.tabs}>
                        <li onClick={() => {
                            navigate('/login')
                        }}><span></span> Login</li>
                        <li onClick={() => {
                            navigate('/signup')
                        }}><span></span> SignUp</li>
                        <li onClick={() => {
                            navigate('/')
                        }}><span></span> Free Trial</li>
                    </ul>
                </nav>
            </div>
            <div className={style.menuBtn} >
                <MenuBtn func={() => {
                    setIsopen(!isopen)
                }} />
            </div>
            <div className={style.banner}>
                <img src={logo} className={style.logo} alt="" />
                <div className={style.bannerText}>
                    <h1>Book a free trail</h1>
                    <p>Explore the Quran in your house</p>
                    <div className={style.bannerBtn}>
                        <p > <span></span> Book Free Trial</p>
                        <p > <span></span>Join Us</p>
                    </div>
                </div>
            </div>
            <MiddleSec />
            <Footer />
        </div>
    )
}

export default HomePage
