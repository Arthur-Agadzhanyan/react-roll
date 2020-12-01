import { useEffect, useState } from 'react';
import s from './categories.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCategory } from '../../redux/actionCreator';

const Categories = (props) => {
    const [activeItem, setItem] = useState(0);

    return (
        <div className='categories'>
            {props.items.map((item, i) => {
                return <button key={`${item}_${i}`}
                    onClick={() => {
                        props.onChangeCategory(item)
                        setItem(i)
                    }}
                    className={`${s.btn} ${props.category === item ? s.active : ''}`}>{item}</button>
            }
            )}

        </div>
    );
}

const stateToProps = state => ({
    money: state.money,
    sort: state.sort,
    category: state.category
})

const dispatchToProps = dispatch => ({
    onSortByCost: (state, a, b) => {
        dispatch(sortByCost(state, a, b))
    },
    onSortByAlphabet: (state, a, b) => {
        dispatch(sortByAlphabet(state, a, b))
    },
    onSortByPopularity: (state) => {
        dispatch(sortByPopularity(state))
    },
    onChangeCategory: (category)=>{
        dispatch(changeCategory(category))
    }
})

Categories.propTypes = {
    items: PropTypes.array,
    allRolls: PropTypes.array
}

export default connect(stateToProps, dispatchToProps)(Categories)
