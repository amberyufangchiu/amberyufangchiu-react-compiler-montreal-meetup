import { useState, useEffect, useMemo, FC } from "react";

const useLogRendered = (name: string) => {
  useEffect(() => {
    console.log(`${name} rendered`);
  });
};

const Child: FC = () => {
  useLogRendered("Child");

  return <div className="border">Child div</div>;
};

const Parent: FC = () => {
  const [count, setCount] = useState(0);
  useLogRendered("Parent");

  //CHANGE:
  const memoizedChild = useMemo(() => <Child />, []);

  return (
    <div className="border">
      = With Memo =
      <br />
      Parent div - count is {count}
      <div>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          Increment btn
        </button>
      </div>
      {/* CHANGE: */}
      {memoizedChild}
    </div>
  );
};

const App: FC = () => {
  useLogRendered("App");

  return <Parent />;
};

export default App;
