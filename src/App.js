import './App.css';
import React, {useState} from 'react';
import View from './components/View';
import Inputs from './components/Inputs';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hobbies, setHobbies] = useState('');

  return (
    <div className="App">
      <Inputs setAge={setAge} setHobbies={setHobbies} setName={setName} />
      <View   name={name} age={age} hobbies={hobbies} />
    </div>
  );
}

export default App;
