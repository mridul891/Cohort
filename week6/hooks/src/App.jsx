import { useEffect, useMemo, useState } from 'react'

import './App.css'

function App() {
  const [exchangeData1, setExchangeData1] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});
  const [bankData, setBankData] = useState({});
  console.log(" app is rendering")
  // fetch('https://google.com/', async (res) => {
  //   const json = await res.json();
  //   setBankData({ income: 100 });
  //   // assume it is {income :100}
  // })
  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData1({
        returns: 100
      });
    });
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setExchangeData2({
        returns: 100
      });
    });
  }, [])
  const cryptoreturn = useMemo(() => {
    console.log("hi there before")
    return exchangeData1.returns + exchangeData2.returns
  }, [exchangeData1, exchangeData2]);
  console.log("hi there after");
  const incomeTax = (bankData.income + cryptoreturn) * 0.3;
  return (
    <>
      {/* <button onClick={() => setCount(count + 1)}>Count is {count}</button> */}
      hi there , your income tax returns are {incomeTax}
    </>
  )
}

export default App
