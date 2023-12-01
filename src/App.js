
import scss from './App.module.scss'
import { useState } from "react";
import BtnNation from './components/BtnNations/BtnNation';
import BtnNation2 from './components/BtnNation2/BtnNation2';
import BtnNation3 from './components/BtnNation3/BtnNation3';

function App() {
  const [btns, setBtns] = useState("-18");

  const renderBtns = () => {
    switch (btns) {
      case "-18":
        return <BtnNation />
      case "18-24":
        return <BtnNation2 />
      case "24+":
        return <BtnNation3 />
    }
  }

  return (
    <div className={scss.App}>
      <div className={scss.btns}>
          <button onClick={() => setBtns("-18")}>-18</button>
          <button onClick={() => setBtns("18-24")}>18-24</button>
          <button onClick={() => setBtns("24+")}>24+</button>
      </div>
      <div className={scss.container}>
          {renderBtns()}
      </div>
    </div>
  );
}

export default App;