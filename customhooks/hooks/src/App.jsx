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

function useIsOnline() {
  const [online, setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));
  }, []);
  return setOnline;
}

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

const useDimesnsions = () => {
  const [dimension, setDimension] = useState({ height: 0, width: 0 });

  const handleDimension = (e) => {
    setDimension({ x: e.screen.width, y: e.screen.height });
  };

  useEffect(() => {
    window.addEventListener("screenchange", handleDimension);
  });
  return dimension;
};

const useInterval = (fn, timeout) => {
  useEffect(() => {
    setInterval(fn(), timeout);
  }, []);
};

const useDebounsedvalue = (value, timeout) => {
  const [debounces, setDebounces] = useState(value);

  useEffect(() => {
    let timeoutvalue = setTimeout(() => {
      setDebounces(value);
    }, timeout);
    return () => {
      clearTimeout(timeoutvalue);
    };
  }, [value, timeout]);
  return debounces;
};

function App() {
  const mousePointer = useMousePointer();
  const { todos, loading } = useTodo(5);
  const online = useIsOnline();
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const debouncedvalue = useDebounsedvalue(value, 1000);

  useInterval(() => setCount((c) => c + 1), 1000);
  if (loading) {
    return <div>Loadding...</div>;
  }

  return (
    <>
      {todos.map((todo, index) => (
        <Track todo={todo} key={index} />
      ))}
      {online ? "you are online" : " you are offline"}
      <div></div>
      Your mouse position is {mousePointer.x} {mousePointer.y}
      <div></div>
      your Current count is {count}
      <div></div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <div>the and is {debouncedvalue}</div>
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
