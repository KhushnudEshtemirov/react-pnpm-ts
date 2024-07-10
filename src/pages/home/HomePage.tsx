import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { decrement, increment } from '../../redux/loginSlice/loginSlice';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.loginSlice.value);

  return (
    <div className="p-5">
      <h2>HomePage</h2>
      <p>{value}</p>
      <div className="flex gap-3">
        <button className="border p-2" onClick={() => dispatch(increment())}>
          Increment by one
        </button>
        <button className="border p-2" onClick={() => dispatch(decrement())}>
          Decrement by one
        </button>
      </div>
    </div>
  );
};

export default HomePage;
