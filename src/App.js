import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

function App() {
  const dispatch = useDispatch();
  const amount = useSelector(state => state.amount)

  const addTask = () => {
    dispatch({ type: 'AMOUNT' });
  }

  const [value, setValue] = React.useState('');
  console.log(value);


  return (
    <div className="App">
      <input onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={() => addTask()}>Add</button>
      <div>Количество заданий: {amount}</div>
      <ToDoList text={value} />
    </div>
  );
}

export default App;
