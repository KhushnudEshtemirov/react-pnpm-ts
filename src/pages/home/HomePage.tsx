import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { decrement, increment } from '../../redux/loginSlice/loginSlice';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.loginSlice.value);
  const [text, setText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const str: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, explicabo distinctio? Alias nulla autem officia itaque ipsam aperiam cupiditate ipsa obcaecati minima accusamus. Tempore delectus iusto nam earum, quos, soluta assumenda facere inventore itaque et voluptatum atque eum qui aperiam sequi eligendi tempora ut? Molestias ad suscipit necessitatibus voluptatum voluptates eos officia perspiciatis maiores eum nisi deserunt reiciendis quod minima iste, laudantium quaerat earum adipisci vero atque commodi beatae alias magnam labore. Soluta voluptate quae, fugiat placeat ipsa facere, ratione cupiditate excepturi quos at sapiente doloribus deserunt aperiam unde accusantium vitae! Facere atque accusantium inventore rem voluptate deserunt nam fugit.';
  // const arr = str.split(' '); // Print with words

  useEffect(() => {
    if (currentIndex < str.length) {
      const interval = setInterval(() => {
        setText((prev) => prev + str[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  return (
    <div className="p-5">
      <h2>HomePage</h2>
      <p>{value}</p>
      <div className="flex gap-3">
        <button className="border p-2" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="border p-2" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <div className="py-5">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HomePage;
