import './App.css';
import HelloWorld from './components/HelloWorld';
import Text from './components/Text';

function App() {

  const name = 'Vinicius'
  function sum(a, b){
    return a + b
  }
  const url = 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/04/21/pc-gamer-thumb-ts56rack6f6u.jpg'

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro projeto xD by: {name.toUpperCase()}</p>
      <p>Soma: {sum(1, 3)}</p>
      <img src={url} alt="Imagem de computador gamer" />
      <HelloWorld/>
      <Text/>
    </div>
  );
}

export default App;
