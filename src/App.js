import './App.css';
import React, {useState} from 'react';
import View from './components/View';
import Inputs from './components/Inputs';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [nameView, setNameView] = useState('')
  const [ageView, setAgeView] = useState('')
  const [hobbiesView, setHobbiesView] = useState('')

  return (
    <div className="App">
      <Inputs setNameView={setNameView} setAgeView={setAgeView} setHobbiesView={setHobbiesView} ageView={ageView} nameView={nameView} hobbiesView={hobbiesView} name={name} age={age} hobbies={hobbies} setAge={setAge} setHobbies={setHobbies} setName={setName} />
      <View ageView={ageView} nameView={nameView} hobbiesView={hobbiesView}  name={name} age={age} hobbies={hobbies} setName={setName} />
    </div>
  );
}

export default App;
