// import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
const toggleMode=(cls)=>{
  removeBodyClasses();
  document.body.classList.add('bg-'+cls)
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("dark mode has been enabled","success");
    document.title='TextUtils - Dark-Mode';
    //setInterval(()=>{
     // document.title='TextUtils is amazing mode';
   // },2000);
   // setInterval(()=>{
    //  document.title='install Textutils now';
   // },1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled","success");
    document.title='TextUtils - Light-Mode';
  }
  
}
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container" my-3>
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
            
          <Route exact path="/"element={
            <TextForm showAlert= {showAlert} heading="Try TextUtils-Word Counter,Character counter,Remove extra spaces"mode={mode} />
          }/>
          
        </Routes>
        
        
      </div>
      </Router>
    </>
  );
}

export default App;
