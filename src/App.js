import './styles/style.sass';
import React from "react";
import Content from "./components/content"

function App() {

  return (
    <div className="App">
      <p className='header'>Рассчитайте стоимость автомобиля в лизинг</p>
      <Content />
    </div>
  );
}


export default App;
