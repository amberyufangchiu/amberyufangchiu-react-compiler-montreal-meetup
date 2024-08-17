"use no memo";

import { useState, useEffect, FC } from "react";

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

  return (
    <div className="border">
      = No Memo =
      <br />
      Parent div - count is {count}
      <div>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          Increment btn
        </button>
      </div>
      <Child />
    </div>
  );
};

const App: FC = () => {
  useLogRendered("App");

  return <Parent />;
};

export default App;
