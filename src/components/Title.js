import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const Title = ({titleText}) => {
  const [time, setTime] = useState(new Date());
  const leftTodosCount = useSelector(state => state.todos.filter(v=>!v.done).length);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => {
      clearTimeout(timer)
    }
  });

  const handleResetClicked = ()=>{
    
  }

  return (
    <>
      <div className="title">
        <h1>{titleText} {leftTodosCount}남음</h1>
        <h2>{time.toLocaleTimeString()}</h2>
        <button onClick={handleResetClicked}></button>
      </div>
    </>
  )
}