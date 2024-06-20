import './App.css';
import SayMyName from './components/SayMyName';
import People from './components/People';
import Text from './components/Text';

function App() {
  const name = 'Jubiscleiton'
  return (
    <div className="App">
      <Text/>
      <SayMyName name="Vinicius"/>
      <SayMyName name="João"/>
      <SayMyName name={name}/>
      <People 
        name="Alfredo" 
        age="27" 
        job="Desenvolvedor" 
        photo="https://scontent.fcxj1-1.fna.fbcdn.net/v/t39.30808-1/320510398_701166124949999_7162325837565104294_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YCSAGZEDGQYQ7kNvgEINgXo&_nc_ht=scontent.fcxj1-1.fna&oh=00_AYCdAuzxWlDwISSYKBBwPaeU5V43XD4IGM0X3FdR9rhBMg&oe=6678D306"/>
    </div>
  );
}

export default App;
