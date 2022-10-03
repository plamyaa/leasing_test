import './styles/style.sass';
import './styles/fonts/font/stylesheet.css'
import './styles/fonts/font-2/stylesheet.css'
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
