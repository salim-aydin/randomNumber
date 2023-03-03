import "./App.css";
import { useState } from "react";

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [rastgele, setRastgele] = useState(0);
  
  const handleSubmit = () => {
    if (min < max) {
      setRastgele(Math.floor(Math.random() * (max - min + 1)) + min);
    }else{
      alert("A sayısı B sayısından küçük olmalıdır.")
    }
  }

  const handleChangeMin = (e) => {
    setMin(parseInt(e.target.value,10))
  }

  const handleChangeMax = (e) => {
    setMax(parseInt(e.target.value,10))
  }

  return (
    <div className="App">
      <div id="ilk">Random Number {rastgele}</div>
      <div id="orta">
        <div>MIN</div>
        <input type="number" onChange={handleChangeMin} value={min}/>
        <div>MAX</div>
        <input type="number" onChange={handleChangeMax} value={max}/>
      </div>
      <div id="son">
        <button onClick={handleSubmit}>Generate</button>
      </div>
    </div>
  );
}

export default App;