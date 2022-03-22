import React, {useState} from "react";
import "./CounterHead.css"
const CounterHead = (props) => {
  let counter = 0;
  const [count, SetCount] = useState(counter);

  const ClickHandler = () => {
    SetCount(count+1);
  };
  return (
    <div className="body">
      <h1 className="text">Tuşa Basma Sayınız</h1>
      <h3 className="text2">Toplam : {count}</h3>
      <button onClick={ClickHandler} className="Button">   +    </button>
      <h6 className="author">İlyas Çavdır</h6>
    </div>
  );
};

export default CounterHead;
