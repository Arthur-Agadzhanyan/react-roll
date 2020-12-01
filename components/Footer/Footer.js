import React from 'react';
import s from './footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className='main_container' style={{width: '100%',justifyContent:'left'}}>
                <div className={s.footer__wrapper}>
                    <ul className={s.footer__menu}>
                        <li className={s.link__container}>
                            <Link href='/'><a className={s.menu__link}>Главная</a></Link>
                        </li>
                        <li className={s.link__container}>
                            <Link href='/rolls'><a className={s.menu__link}>Роллы</a></Link>
                        </li>
                        <li className={s.link__container}>
                            <Link href='/about-delivery'><a className={s.menu__link}>О доставке</a></Link>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className={s.footer__bottom} style={{padding: '35px 20px'}}>
                <div className='main_container' style={{width: '100%',justifyContent:'left'}}>
                    <div className={s.copyright}>
                        Телефон доставки: &nbsp; <a className={s.phone} href='tel:+380888777666'>+38 (088) 877 76 66</a>
                        <p className={s.text}>© 2004 — 2020 Ресторан японской кухни «React Rolls»
                        </p>
                        <p className={s.text} style={{paddingTop: '0px'}}>Доставка суши на дом</p>
                    </div>
                    <div className={s.social_links}>
                        <a href='#' className={s.link} ><i className="fab fa-facebook-f"></i></a>
                        <a href='#' className={s.link}><i className="fab fa-vk"></i></a>
                        <a href='#' className={s.link}><i className="fab fa-instagram"></i></a>
                        
                    </div>
                    <div className={s.contacts_questions}>
                        <div className={s.contacts}>
                            <ul className={s.contacts__list}>
                                <h2 className={s.title}>Контакты</h2>
                                <li className={s.list__item}>г. Луганск, ул. Советская,15</li>
                                <li className={s.list__item}>+38 (099) 988 87 77</li>
                                <li className={s.list__item}>+38 (011) 122 23 33</li>
                            </ul>
                        </div>
                    <div className={s.questions}>
                    Остались вопросы? <br/>
Задайте их нам!
                    <a className={s.questions__link} href='mailto:marklevenguk@yandex.ua?subject=Вопросы по сайту "React Rolls"'><i className="fas fa-envelope"></i></a>
                    </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
