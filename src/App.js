import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      {/* <Navbar title="word power" aboutText="About Us" /> */}
      <Navbar title="word power" />

      <div className="container my-3">
        <TextForm heading="Enter the text" />

        {/* <About /> */}
      </div>
      {/* <Navbar /> */}

      {/* when i'm writing title="wordpower" then i'm passing prop */}
    </>
  );
}

export default App;
