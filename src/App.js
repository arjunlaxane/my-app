import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light');
  //this is my state variable which will tell whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <>
      {/* <Navbar title="word power" aboutText="About Us" /> */}
      <Navbar title="wordGame" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <TextForm heading="Enter the text" mode={mode} />

        {/* <About /> */}
      </div>
      {/* <Navbar /> */}

      {/* when i'm writing title="wordpower" then i'm passing prop */}
    </>
  );
}

export default App;
