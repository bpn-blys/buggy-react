import { useEffect, useState } from "react";
import { APITester } from "./APITester";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import { ShowData } from "./api";

export function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='app'>
      <div className='logo-container'>
        <img src={logo} alt='Bun Logo' className='logo bun-logo' />
        <img src={reactLogo} alt='React Logo' className='logo react-logo' />
      </div>

      <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
      {show && <ShowData />}

      <h1>Bun + React</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <APITester />
    </div>
  );
}

export default App;
