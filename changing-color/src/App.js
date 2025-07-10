import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import ColorBox from './ColorBox';
function App() {
  const [color,setColor]= useState('')

  return (
    <div   className="App">
      <Input setColor={setColor} />
      <ColorBox color={color}/>
    </div>
  );
}

export default App;
