import { useEffect, useMemo, useState } from 'react';
import './App.css'
/* import CardWrapper from './Component/CardWrapper';
import TextComponent from './Component/TextComponent'; */
/* import Headers from './Component/Headers'

import HeaderWithButton from './Component/HeaderWithButton';*/
// import Todo from './Component/Todo';
function App() {
  // const [todos, setTodo] = useState([])
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  /*   const addTodo = () => {
      setTodo([...todos, {
        title: Math.random(),
        description: "Four"
      }])
    } */



  /*  useEffect(() => {
     fetch("https://sum-server.100xdevs.com/todos").then((res) => res.json()).then((data) => setTodo(data.todos))
   }, [todos]); */


  //  use useMemo
  let sum = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum = sum + i;
    }
    return sum;
  }, [number])
  return (
    <>
      {/*  <HeaderWithButton />
      <Headers title="pandey" /> */}

      {/* Now we are creating the todo application */}
      {/* <button onClick={addTodo}>To add a Todo</button>
      {todos.map((data, index) => <Todo title={data.title} description={data.description} key={index} />)} */}

      {/* Now we are learning about the wrapper which is basically nothing just rendering other components inside their own component  */}
      {/* <CardWrapper >
        <TextComponent />
      </CardWrapper> */}

      {/* this is the assignment given in class */}
      {/*   <div>
        {todos.map((data, index) => <Todo title={data.title} description={data.description} key={index} />)}
      </div> */}


      {/* use Of usememo */}

      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <p>sum is {sum}</p>
      <button onClick={() => { setCounter(counter + 1) }}>Counter {counter}</button>
    </>
  )
}

export default App
