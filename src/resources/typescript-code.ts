export default `import { tada } from 'react-tada';

type State {
  count: number;
}

const useCountTada = tada<State>({ count: 0 });

const useCount = useCountTada.useTada;

function Counter() {
  const [count, setCount] = useCount((state) => state.count);
  const inc = () => {
    setCount((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={inc}>+1</button>
    </>
  );
}`;
