
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, { useState } from 'react'
import Alert from './Alert'
// import About from './About'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled" , "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled" , "success");
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title = "TextUtils" about = "About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      {/* <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<TextForm/>}/>
      </Routes> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}></TextForm>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
