/* In react we cannot return multiple sibling (2 sibling side by side )  

Ques = Imp interview question Why we need to return a single component not multiple sibling

Ans = It make easy to do reconciliation(The process of figuring out when what dom update need to happen as your application goes )


Ques = what is Re -render 

ANs =  Any time when the react update the dom 

a re render means that : 
1) React did some work to calculate what all should update in this component 
2) The component actually got called  (you can put a log to confirm this )
3) The inspector shows you a bounding box around the component 

it happens when 

1) A state variable that is being used inside a component changes
2) a parent component re render triggers all children re-rendering

You want to minimise the number of re-renders to make a highly optimal react app 
The more the components that are getting re-rendered , the worse


useMemo Hook 

This hook lets you skip  re-rendering a component when its props are unchanged



Some jargons 

Side effects = In react , the concept of side effects encompasses that reach outside the functional scope of a react component . These Operationa can affect other components, intereact with the browser or perform asynchronous data fetching.

Anything which is not realted in rendering the ui or putting or removing thing  in the dom are called side effects 

Common Hooks in react are 
usestate
useeffect 
usememo 
usecallback 
useref
useContext


useMemo = memo let u skip re-rendering a component when its props  are unchanged;


usecallback is a hook in  react . it is used to memoize functions  which can help in optimizing the performance of your application 
*/