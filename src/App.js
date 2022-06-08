import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  //this is my state variable which will tell whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  //i want to show alert whenever i'm doing anything with textsrea/toggglemode
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';

      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };
  return (
    <>
      {/* <Navbar title="word power" aboutText="About Us" /> */}
      <Navbar title="wordGame" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />

        {/* <About /> */}
      </div>
      {/* <Navbar /> */}

      {/* when i'm writing title="wordpower" then i'm passing prop */}
    </>
  );
}

export default App;
