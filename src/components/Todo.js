import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleTodo} from '../data/todos/actions';

const Todo = ({id,done, contents, onToggle}) => {
  const handleChange = () => onToggle(id);
  return (
    <>
      <div className="todo">
        <input readOnly onChange={handleChange} id={id} type="checkbox" />
        <label htmlFor={id}>{contents}</label>
      </div>
    </>
  )
}

Todo.propTypes = {
  id:PropTypes.string.isRequired,
  done:PropTypes.bool.isRequired,
  contents:PropTypes.string.isRequired,
  onToggle:PropTypes.func.isRequired
}

export default connect(null, {onToggle:toggleTodo})(Todo);