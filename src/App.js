import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#51509b';
  //     showAlert('Dark mode has been enabled', 'success');
  //     // document.title = 'WordGame-Dark Mode';

  //     // setInterval(() => {
  //     //   document.title = 'WordGame-Amazing game';
  //     // }, 1500);

  //     // setInterval(() => {
  //     //   document.title = 'WordGame-Install thisAmazing game';
  //     // }, 2000);
  //   } else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert('Light mode has been enabled', 'success');
  //     // changing title dynamically
  //     // document.title = 'WordGame-Light Mode';
  //   }
  // };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  };

  const toggleMode = cls => {
    console.log(cls);
    removeBodyClasses();

    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#51509b';
      showAlert('Dark mode has been enabled', 'success');
      // document.title = 'WordGame-Dark Mode';

      // setInterval(() => {
      //   document.title = 'WordGame-Amazing game';
      // }, 1500);

      // setInterval(() => {
      //   document.title = 'WordGame-Install thisAmazing game';
      // }, 2000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // changing title dynamically
      // document.title = 'WordGame-Light Mode';
    }
  };

  return (
    <BrowserRouter>
      <>
        {/* <Navbar title="word power" aboutText="About Us" /> */}
        <Navbar title="wordGame" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/textform"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to convert to Uppercase,Lowercase,Extract,Copy,Clear"
                  mode={mode}
                />
              }
            />
          </Routes>
          {/* <About /> */}
        </div>
        {/* <Navbar /> */}

        {/* when i'm writing title="wordpower" then i'm passing prop */}
      </>
    </BrowserRouter>
  );
}

export default App;
