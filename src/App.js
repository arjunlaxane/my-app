import logo from './logo.svg';
import './App.css';

let name = 'Arjun';
function App() {
  return (
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>

      <div className="container">
        <h1>Hello, {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus
          porro, praesentium asperiores, exercitationem id natus nihil
          reprehenderit assumenda amet sunt reiciendis sed minima voluptatibus?
        </p>
      </div>
    </nav>
  );
}

export default App;
