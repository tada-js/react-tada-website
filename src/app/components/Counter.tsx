'use client';

import { useCountTada } from '@/app/store/tada';

const useCount = useCountTada.useTada;

const Counter = () => {
  const [count, setCount] = useCount((state) => state.count);

  const inc = () => {
    setCount((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };

  return (
    <div className="counter">
      <span>{count}</span>
      <button onClick={inc}>+ 1</button>
    </div>
  );
};

export default Counter;
