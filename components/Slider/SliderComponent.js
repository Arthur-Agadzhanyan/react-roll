import Slider from "react-slick";
import s from './slider.module.scss'
import Image from 'next/image'

const SliderComponent = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    cssEase: 'linear'
  }

  return (
    <>
      <Slider {...settings}>
        <div className={s.slider_block}>
          <div className={s.slide_container}>
            <div className={s.slide__info}>
              <h3 className={s.slide__title}>Заказ Экономный - 15%</h3>
              <p  className={s.slide__text}>Скидка действует с пн-чт, до 13:00.На доставку и самовывоз.</p>
            </div>
            
            <div className={`${s.slide__img} `}>
              <Image src='/slider/1.png' width={750} height={450} alt='first'/>
            </div>
          </div>
        </div>
        <div className={s.slider_block_dozhor}>
        <div className={s.slide_container}>
            <div className={s.slide__info}>
              <h3 className={s.slide__title}>Ночной Дожор - 15%</h3>
              <p  className={s.slide__text}>Мы даём скидку на доставку роллов после 20:00.</p>
            </div>
            <div className={`${s.slide__img}`}>
              <Image src='/slider/2_2.png' width={750} height={450} alt='second'/>
            </div>
          </div>
        </div>
        <div className={`${s.slider_block} ${s.slider_imenn}`}>
          <div className={s.slide_container}>
            <div className={s.slide__info}>
              <h3 className={s.slide__title}>В ДЕНЬ РОЖДЕНИЯ - 15%</h3>
              <p  className={s.slide__text}>... И ЕЩЕ ТРИ ДНЯ ПОСЛЕ!
Скидка действует на все, кроме сетов и напитков.
В суши-барах, на доставку и самовывоз. </p>
            </div>
            
            <div className={`${s.slide__img} ${s.third__slide}`}>
              <Image src='/slider/3.png' width={750} height={450} alt='third'/>
            </div>
          </div>
        </div>
      </Slider>
      <br />
    </>
  );
}

export default SliderComponent;
