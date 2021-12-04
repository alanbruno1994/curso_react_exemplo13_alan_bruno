import {useSelector, useDispatch} from 'react-redux'
import {counterActions}  from '../store/counter';

export default function Counter(){
   //Aqui atraves de counter que esta no store do index.ts
   const counter = useSelector((state:any)=>state.counter.value)
   
   const dispatch=useDispatch();

    const incrementHandler=()=>{
        dispatch(counterActions.increment())
    }

    const decrementHandler=()=>{
        dispatch(counterActions.decrement())
    }

    const reset=()=>{
        dispatch(counterActions.initialValue(0))
    }



    return <div>
        <p>Counter {counter}</p>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
}