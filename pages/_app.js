import Head from 'next/head'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Header from '../components/Header/Header'
import reducer from '../redux/reducers/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.scss'
import Footer from '../components/Footer/Footer'
import { DefaultSeo } from 'next-seo'

let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


function MyApp({ Component, pageProps }) {

  return (
    <>
       <DefaultSeo
       title = 'React Rolls'
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://react-rolls.ru/',
            site_name: 'SiteName',
            description: 'Хотите побаловать себя, своих родных и близких, оригинальными суши роллами? Тогда Вы обратились по адресу! Мы используем только свежие и качественные продукты, готовим блюда только после Вашего заказа. В нашем меню каждый найдет для себя что-то вкусненькое.'
          }}
        />

      <Provider store={store}>

          <Header />
          
            <main className='our_content'>
                <Component {...pageProps} />
            </main>
              
          <Footer/>
      </Provider>
    </>
  )
}

export default MyApp
