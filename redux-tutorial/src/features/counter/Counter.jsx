import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  //   const amount = useSelector((state) => state.couter.action);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by 10
      </button>
      <span>{count}</span>
    </div>
  );
};
