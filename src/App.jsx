import {useState} from 'react';
import Info from './components/Info';
import Button from './components/Button';

function App(){
  const [secNum, setSecNum] = useState( Math.trunc( Math.random() * 100 ) + 1 );
  const secNumInfo = secNum + ' is the secret number';

  function handleNewGame(){
    setSecNum( Math.trunc( Math.random() * 100 ) + 1 );
  }

  return (
    <>
      <Info message={secNumInfo} />
      <Button handleOnClick={handleNewGame}>New Game</Button>
    </>
  );
}

export default App;
