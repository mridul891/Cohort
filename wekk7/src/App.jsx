import { useState, useContext } from 'react'
// as all these landing and dashboard component now have became asynchronous in nature it bascially require an system Api inorder to show something while  the frontend is comming from the backend.
import './App.css'
import { CountContext } from './Context';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Even, countAtom } from './store/atoms/count';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// const Landing = lazy(() => import('./component/Landing'))
// const Dashboard = React.lazy(() => import('./component/Dasboard'))
function App() {



  return (
    // using recoil state management library
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
  /* using context api 
   <div  >
     <CountContext.Provider value={count}>
       <Count setCount={setCount} />
     </CountContext.Provider>

   </div >
    */
  // Routing
  /* <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Suspense fallback={"..loading"}>
        < Dashboard /></Suspense>} />
      <Route path='/' element={<Landing />} />

    </Routes>
  </BrowserRouter> */

  // Prop Drillling
}

function Count() {
  return <div>
    <Countrender />
    <Buttons />
  </div>

}

function Countrender() {
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}
function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom)
  const even = useRecoilValue(Even)
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
      <div>{even ? " " : "it is even "}</div>

    </div>
  )
}

/* Why we are using state management tool because it helps in the problem of re rendering of the component that are not using an usecontext hook also 

why we are using Context Api = To make syntax cleaner / To get rid of prop drilling 

This problem is solved by state management tools
*/
export default App;
