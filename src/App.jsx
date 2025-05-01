import {useState} from 'react';
import Info from './components/Info';
import Button from './components/Button';
import Input from './components/Input';

function App(){
  const [secNum, setSecNum] = useState( Math.trunc( Math.random() * 100 ) + 1 );
  const [inp, setInp] = useState('');
  const [guess, setGuess] = useState(null);
  const secNumInfo = guess === null ? 'Guess the number' : guess === secNum ? 'Yes' : 'No - ' + secNum;

  function handleChange(e){
    setInp( e.target.value ); 
  }
  
  function handleCheck(){
    setGuess( Number(inp) );
  }

  function handleNewGame(){
    setSecNum( Math.trunc( Math.random() * 100 ) + 1 );
    setInp('');
    setGuess(null);
  }

  return (
    <>
      <Info message={secNumInfo} />
      <Input inpVal={inp} handleOnChange={handleChange}/>
      <Button handleOnClick={handleCheck}>Check</Button>
      <Button handleOnClick={handleNewGame}>New Game</Button>
    </>
  );
}

export default App;
