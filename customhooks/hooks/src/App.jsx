import { useEffect, useState } from "react";
import axios from "axios";

function useTodo(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    // we are writing this clean up function as if we n changes then we have 2 call of hthe set internval i.e first for the old n and then of the new n

    return () => {
      clearInterval(value);
    };
  }, [n]);
  return { todos, loading };
}

function App() {
  const { todos, loading } = useTodo(5);
  if (loading) {
    return <div>Loadding...</div>;
  }
  return (
    <>
      {todos.map((todo, index) => (
        <Track todo={todo} key={index} />
      ))}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
