import React, { useState } from "react";
import { getRandomInt, getRandomId } from "./utils";

// В этой задаче вам нужно создать компонент React, который генерирует случайное число между 1 и 100.
// - Компонент должен позволять пользователю делать предположения о числе.
// - Компонент должен отображать количество попыток пользователя.
// - Компонент должен отображать сообщение, указывающее, является ли предположение пользователя выше или ниже, чем актуальное число.
// - Компонент должен отображать список чисел введенных при попытках угадать число

function App() {
  const initialState = {
    inputNum: 0,
    randomNum: getRandomInt(0, 100),
    attempts: [],
    feedback: '',
  };

  const [state, setState] = useState(initialState);
  
  console.log('random num is set to:', state.randomNum);

  const handleGame = () => {
    const { inputNum, randomNum } = state;
    const feedback = {
      less: 'Введенное число меньше',
      more: 'Введенное число больше',
      success: 'Вы угадали',
    };

    let gameResult;

    if (inputNum > randomNum) {
      gameResult = feedback.more;
    }
    if (inputNum < randomNum) {
      gameResult = feedback.less;
    }
    if (inputNum === randomNum) {
      gameResult = feedback.success;
    }
    setState({...state, attempts: [...state.attempts, inputNum], feedback: gameResult});
  };
  
  return (
    <div>
      <h1>Guess the Number!</h1>
      <input type="number" onChange={({ target }) =>setState({...state, inputNum: +target.value})} value={state.inputNum} />
      <p>{state.feedback}</p>
      <button onClick={handleGame}>Guess!</button>
      <button type="button" onClick={() => setState(initialState)}>Reset</button>
      <p>Attempts: {state.attempts.length}</p>
      <ul>{state.attempts.map((attempt) => <li key={getRandomId()}>{attempt}</li>)}</ul>
    </div>
  );
}

export default App;
