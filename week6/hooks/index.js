/* 
reconciliation means is the process of taking this current state finding the difference from the existing state and reconciling what the dom should look like right now and putting things on the dom 

state -dynamic set of things in your website 

usestate is hook that help you create and mangage state

main difference between useeffect and usememo 
useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

is they both help you to skip un necessary re rendering 
but with the  help of  usememo we can return something but in useeffect we cannot return something 


difference between usecallback and memo 
if we want to memoize a function we use usecallback


usecallback is about not rendering a child component, if the function hasnt/doesnt need to change across renders

memo ans usememo are different 


memo lets you skip rerendering if the props are unchanges 

usecallback tab use karna hia jab pata hai function mai koi change nhi ho raha bar bar usse same hi redult genrate hona hai toh react ko batane ke liya usecallback use karte hai taki wo usse skip kar sake  


useref is basically used to get the ref of ther curretn element of  the website 


let suppose const divref= useref();
to get the presnet value we have to use 
    we have to use divref.current.innehtml---
*/