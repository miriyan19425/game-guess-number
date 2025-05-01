import {useState} from 'react';
import Info from './components/Info';
import Button from './components/Button';
import Input from './components/Input';

function inform(sN, gN){
  let message;
  if(gN === null){
    message = 'Guess the number';
  }else if(gN === sN){
    message = 'Yes - ' + sN;
  }else if(gN < sN){
    message = 'Too small - ' + sN;
  }else{
    message = 'Too big - ' + sN;
  }
  return message;
}

function App(){
  const [secNum, setSecNum] = useState( Math.trunc( Math.random() * 100 ) + 1 );
  const [inp, setInp] = useState('');
  const [guessNum, setGuessNum] = useState(null);
  const secNumInfo = inform(secNum, guessNum);

  function handleChange(e){
    setInp( e.target.value ); 
  }
  
  function handleCheck(){
    setGuessNum( Number(inp) );
  }

  function handleNewGame(){
    setSecNum( Math.trunc( Math.random() * 100 ) + 1 );
    setInp('');
    setGuessNum(null);
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
