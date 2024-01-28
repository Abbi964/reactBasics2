import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  // state for checking if input is valid or not
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length >= 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };
  
  const goalInputFoucusHandler = event => {
    if (event.target.value.trim().length === 0){
      setIsValid(false)
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0){
      setIsValid(false);
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label style={{color : isValid ? 'black' : "red"}}>Course Goal</label>
        <input style={{backgroundColor : isValid ? 'transparent' : "salmon", borderColor : isValid ? 'black' : "red"}} type="text" onFocus={goalInputFoucusHandler} onChange={goalInputChangeHandler} />
      </div>
      <Button className={`button ${!isValid ? 'invalid' : ''}`} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
