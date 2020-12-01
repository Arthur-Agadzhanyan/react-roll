import { connect } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'
import AllRolls from '../../components/AllRolls/AllRolls'
import Categories from '../../components/Categories/Categories'
import Sort from '../../components/Sort/Sort'
import useHttp from '../../hooks/http.hook'
import { setRolls } from '../../redux/actionCreator'
import Load from '../../components/Load'
import s from '../../styles/Main.module.scss'
import { NextSeo } from 'next-seo'


function Home(props) {
  const [food, setFood] = useState([]);
  const { loading, request } = useHttp()
  const sort = ['популярности', 'цене(↑)', 'цене(↓)', 'алфавиту(↓)', 'алфавиту(↑)']
  const categories = ['Все', 'Норимаки', 'Футомаки', 'Урамаки', 'Запеченные']

  const getFood = useCallback(async () => {
    try {
      const fetchedFood = await request('/api/rolls', "POST", null)
      props.onSetRolls(fetchedFood)
      setFood(fetchedFood)
    } catch { }
  }, [])

  useEffect(() => {
    getFood()
  }, [getFood])

  if (loading) {
    return <Load />
  }

  return (
    <>
      <NextSeo
          title= "Роллы | React Rolls"
      />
      <div className='wrapper'>
        <div className='container'>
          <div className={s.content__top}>
            <Categories items={categories} allRolls={food} sort={sort} />
            <Sort sort={sort} allRolls={food} />
          </div>
        </div>
        {!loading && <AllRolls rolls={props.sort} />}
        {/* <Load/> */}

      </div>
    </>
  )
}

const stateToProps = state => ({
  sort: state.sort,
})

const dispatchToProps = dispatch => ({
  onSetRolls: (state) => {
    dispatch(setRolls(state))
  }
})

export default connect(stateToProps, dispatchToProps)(Home)