import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from 'next/router'
import AllBasketCards from "../components/AllBasketCards/AllBasketCards";
import { addToCost, clearBasket, orderDelivery } from "../redux/actionCreator";
import s from '../styles/basket.module.scss'
import useHttp from "../hooks/http.hook";
import { NextSeo } from "next-seo";


const Basket = (props) => {
  const [orderForm, setForm] = useState({
    name: '',
    phone: '',
    street: '',
    home: '',
    apartment: ''
  });
  const router = useRouter()
  const { request } = useHttp()
  const basketRolls = Object.keys(props.basket.items).map(key => {
    return props.basket.items[key].items[0]
  })
  const basketRollsTitles = Object.keys(props.basket.items).map(key => {
    return props.basket.items[key].items[0]['title']
  })
  const titles = Object.values(basketRollsTitles).join('\n')

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(props.basket))
  })

  const enter = function (formState) {
    return (e) => {
      setForm({ ...orderForm, [formState]: e.target.value })
      // console.log(orderForm[formState]);

    }
  }

 async function submited(e) {
    e.preventDefault()
    console.log()
    if (orderForm.name.length < 2) {
      alert('Слишком короткое имя')
    } else if (`${orderForm.phone[0]}${orderForm.phone[1]}${orderForm.phone[2]}` == `+38` && orderForm.phone.length < 13 || orderForm.phone.length > 13) {
      alert('Введен неправильный формат телефона - правильный +380888560200')
    } else if (orderForm.phone[0] == '0' && orderForm.phone.length < 10) {
      alert('Введен неправильный формат телефона - правильный 0888560200')
    } else if (orderForm.phone[0] != '0' && `${orderForm.phone[0]}${orderForm.phone[1]}${orderForm.phone[2]}` != '+38') {
      alert('Введен неправильный формат телефона - правильный +380888560200')
    } else if (orderForm.street.length < 3) {
      alert('Такой улицы не существует')
    }
    else {
      console.log(orderForm)
      props.onOrderDelivery()
      await request('api/telbot', "POST", {name: orderForm.name,phone:orderForm.phone,street:orderForm.street,home:orderForm.home,apartment:orderForm.apartment,basket:titles})
      props.onClearBasket()
      router.push('/')
      alert('Заказ был успешно отправлен')
      
    }
  }

  function goBack(){
    props.onOrderDelivery()

    router.back()
  }

  if (Object.keys(props.basket.items).length == 0) {
    return <>
      <NextSeo
            title= "Корзина Пуста | React Rolls"/>
    <div className={`${s.container}`} >
      <h2 className={s.empty_basket__title}>Корзина пуста</h2>
      <button className={`${s.basket__btn} ${s.empty__btn}`} onClick={() => router.back()}>Продолжить покупки</button>
    </div>
    </>
  }

  if (props.basket.modal) {
    return (
      <>
      <NextSeo
            title= "Оформление заказа | React Rolls"
        />
      <div className={`${s.container} `}>
        <div className={s.delivery}>
          <h1 className={s.title}>Оформить заказ</h1>
          <form onSubmit={submited}>
            <div className={s.client}>
              <h3 className={s.section_title}>Данные клиента и заказа</h3>
              <div className={s.inputs}>
                <input type='text' className={`${s.client__input} ${s.info__input}`} onChange={enter('name')} placeholder="Имя и фамилия" required />
                <input type='text' className={`${s.client__input} ${s.info__input}`} onChange={enter('phone')} placeholder="Телефон" required />
              </div>


            </div>
            <div className={s.address}>
              <h3 className={s.section_title} >Адрес</h3>
              <div className={s.inputs}>
                <input type='text' className={`${s.address__input} ${s.info__input}`} onChange={enter('street')} placeholder="Улица" required />
                <input type='text' className={`${s.address__input} ${s.info__input}`} onChange={enter('home')} placeholder="Дом" required />
                <input type='text' className={`${s.address__input} ${s.info__input}`} onChange={enter('apartment')} placeholder="Квартира" />
              </div>
            </div>
            <div className={s.basket__totalPrice}>
              <h2 className={s.totalPrice__title}>Итоговая стоимость: <strong>{props.basket.totalPrice}₽</strong></h2>
              <span className={s.count}>Всего роллов: {props.basket.count} шт.</span>
            </div>
            
              <button style={{ cursor: 'pointer',width:'100%'}} className={s.basket__btn} onClick={goBack} type='button'> Продолжить покупки</button>
              <button style={{ cursor: 'pointer',display: 'flex',width:'100%',fontSize:'18px' }} className={s.order_delivery}> Оформить заказ</button>
            
          </form>
        </div>
      </div>
      </>
    )
  }
  return (
    <>
        <NextSeo
            title= "Корзина | React Rolls"
            description = "Оформите заказ прямо сейчас на React-Rolls!"
        />
      <div className={`${s.container}`}>
        <div className={s.top_content}>
          <h2 className={s.basket_title}><i className="fas fa-shopping-basket"></i> Корзина</h2>
          <span style={{ cursor: 'pointer' }} className={s.clear_basket} onClick={props.onClearBasket}><i className={`fas fa-times ${s.basket_X}`}></i> Очистить корзину</span>

        </div>
        <AllBasketCards cards={basketRolls} items={props.basket.items} />
        <div className={s.basket__totalPrice}>
          <h2 className={s.totalPrice__title}>Итоговая стоимость: <strong>{props.basket.totalPrice}₽</strong></h2>
          <span className={s.count}>Всего роллов: {props.basket.count} шт.</span>
        </div>
        <div className={s.controlls}>
          <button style={{ cursor: 'pointer' }} className={s.basket__btn} onClick={() => router.back()}> Продолжить покупки</button>
          <span style={{ cursor: 'pointer' }} className={s.order_delivery} onClick={props.onOrderDelivery}> Оформить заказ</span>
        </div>
      </div>
    </>
  );


}

const stateToProps = state => ({
  basket: state.basket
})

const dispatchToProps = dispatch => ({
  onSetRolls: (state) => {
    dispatch(setRolls(state))
  },
  onClearBasket: () => {
    dispatch(clearBasket())
  },
  onOrderDelivery: () => {
    dispatch(orderDelivery())
  }
})

export default connect(stateToProps, dispatchToProps)(Basket)
