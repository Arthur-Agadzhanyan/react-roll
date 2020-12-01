import { useState } from 'react';
import { connect } from 'react-redux';
import { allRolls, sortByAlphabet, sortByCost, sortByPopularity } from '../../redux/actionCreator';
import s from './sort.module.scss'

const Sort = (props) => {
    const [state, setState] = useState('популярности');
    const [visible, setVisible] = useState(false);
    

    return (
        <>
            <div className={s.sort}>
                Сортировка по <span className={s.sort__item} onClick={()=>setVisible(!visible)}>{state}</span>

                <div className={s.sort__popup} style={{display: visible ? 'block' : 'none'}}>
                    <ul>
                        {props.sort.map((item, i) => (
                            <li 
                            key={`${item}_${i}`} 
                            className={state == item ? `${s.active}` : ''} 
                            onClick={()=>{
                                if(item==='цене(↑)'){
                                    props.onSortByCost(props.sortArr,1,-1)
                                    
                                }
                                if(item==='цене(↓)'){
                                    props.onSortByCost(props.sortArr,-1,1)
                                    
                                }
                                if(item==='алфавиту(↓)'){
                                    props.onSortByAlphabet(props.sortArr,1,-1)
                                    
                                }
                                if(item==='алфавиту(↑)'){
                                    props.onSortByAlphabet(props.sortArr,-1,1)
                                    
                                }
                                if(item==='популярности'){
                                    props.onSortByPopularity(props.sortArr)
                                    
                                }
                                
                                setState(item);setVisible(!visible)
                                }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    );
}
const stateToProps = state => ({
    sortArr: state.sort,
  })
  
  const dispatchToProps = dispatch => ({
      onSortByCost: (state,a,b)=>{
          dispatch(sortByCost(state,a,b))
      },
      onSortByAlphabet: (state,a,b)=>{
          dispatch(sortByAlphabet(state,a,b))
      },
      onSortByPopularity: (state)=>{
          dispatch(sortByPopularity(state))
      }
  })
  
export default connect(stateToProps,dispatchToProps)(Sort)

