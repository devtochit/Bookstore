/* eslint-disable */
import { useState } from 'react';
import Button from './button/ButtonCard';
import ButtonValue from './button/ButtonScreen';
import './calculator.css';
import calculate from './logic/calculate';



function calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  })

  const handleClick = (buttonName) => {
    const updatedState = calculate(state, buttonName)
    setState(updatedState)
  }

  const btn = [
    ['AC', '+/-', '%', '+'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '/'],
    [0, '.', '='],
  ];


  return (
    <>

      <div className="wrapper">
        <ButtonValue value={state.next || state.total || '0'} />
        <Button
          clickHandler={handleClick}
        />
      </div>

    </>
  )
}

export default calculator


