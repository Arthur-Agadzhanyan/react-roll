import s from './header.module.scss'
import Link from 'next/link'
import { connect } from 'react-redux';
import { addToCost } from '../../redux/actionCreator';
import { useState } from 'react';

const Header = (props) => {
    const [navLinks] = useState([
        { name: 'Главная', link: '/' },
        { name: 'Роллы', link: '/rolls' }
        // { name: 'О доставке', link: '/about-delivery' },
    ]);
    const [activePage, setPage] = useState(0)
    const [poppup, setPoppup] = useState(false)
    return (
        <>
            <header className={`${s.header} ${s.desktop}`}>
                <div className='container'>
                    <div className={s.container}>
                        <div className={s.header__content}>
                            <div className={s.header__logo}>
                                <img className={s.logo__image} src='/sushi_logo.png' alt='React Rolls | Лучшие роллы в вашем городе' />
                                <div className={s.logo__content}>
                                    <Link href={'/'}><a className={s.logo__title}>React Rolls</a></Link><br />
                                    <Link href={'/'}><a className={s.logo__subtitle}>Лучшие роллы в вашем городе</a></Link>
                                </div>
                            </div>
                            <div className={s.navigation}>
                                <ul className={s.navigation__list}>
                                    {navLinks.map((item, id) => (
                                        <li className={s.navigation__item} key={`${item}_${id}`}>
                                            <Link href={`${item.link}`}><a onClick={() => setPage(id)} className={`${s.navigation__link} ${activePage === id ? s.active : ''}`}>{item.name}</a></Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            <Link href={'/basket'} >
                                <a className={s.basket} onClick={() => setPage(100)}>
                                    {props.basket.totalPrice} ₽
                                    <span className={s.line}></span>
                                    <i className="fas fa-shopping-basket"></i> {props.basket.count}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <header className={`${s.header} ${s.mobile}`}>
                
                    <div className={s.bars} onClick={()=> setPoppup(!poppup)}>
                        <i className="fas fa-bars" ></i>
                    </div>
                    <div className={s.header__logo}>
                        <img className={s.logo__image} src='/sushi_logo.png' />
                        <div className={s.logo__content}>
                            <Link href={'/'}><a className={s.logo__title}>React Rolls</a></Link><br />
                            <Link href={'/'}><a className={s.logo__subtitle}>Лучшие роллы в вашем городе</a></Link>
                        </div>
                        
                    </div> 
                    <Link href='/basket' >
                                <a className={`${s.basket} ${s.mbasket}`} onClick={() => setPage(100)}>
                                <span className={s.money}>{props.basket.totalPrice} ₽</span>
                                    <span className={s.line}></span>
                                    <i className="fas fa-shopping-basket"></i> {props.basket.count}
                                </a>
                        </Link>
            </header>

            <div onClick={()=> setPoppup(!poppup)} style={{display: poppup ? 'block' : 'none'}} className={s.overlay}></div>

            <nav style={{marginLeft: poppup ? '0px' : '-280px'}} className={s.mobile__poppup}>
                <h2 className={s.poppup__title}>React Rolls</h2>
                <div className={s.poppup__links}>
                    <Link  href='/'><a className={s.poppup__link} onClick={()=>setPoppup(!poppup)}>Главная</a></Link>
                    <Link  href='/rolls'><a className={s.poppup__link} onClick={()=>setPoppup(!poppup)}>Роллы</a></Link>
                    <Link  href='/basket'><a className={s.poppup__link} onClick={()=>setPoppup(!poppup)}>Корзина</a></Link>
                </div>
                <div className={s.social_links}>
                        <a href='#' className={s.link} ><i className="fab fa-facebook-f"></i></a>
                        <a href='#' className={s.link}><i className="fab fa-vk"></i></a>
                        <a href='#' className={s.link}><i className="fab fa-instagram"></i></a>
                        
                    </div>
            </nav>
        </>
    )
}



const stateToProps = state => ({
    basket: state.basket
})

const dispatchToProps = dispatch => ({})

export default connect(stateToProps, dispatchToProps)(Header);