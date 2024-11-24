import logo from './logo.svg';
import './App.css';
import Animal from "./components/Animal";

function App() {
  
    const selectRandomAnimal = () => {
      const randomIndex = Math.floor(Math.random() * animals.length);
  
      return animals[randomIndex].name;
    };

    function App() {
      const selectRandomAnimal = () => {
        const randomIndex = Math.floor(Math.random() * animals.length);
    
        return animals[randomIndex].name;
      };

  return (
    <div className="container">
      <header className="border-orange">
        <h1>Animal Matching Game</h1>
      </header>


      
    </div>
  );
}

export default App;
