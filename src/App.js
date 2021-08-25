
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import SingleBook from './components/SingleBook';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Input />
      <SingleBook/>
    </div>
  );
}

export default App;
