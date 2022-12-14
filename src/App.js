import {  useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import  Alert  from "./components/Alert";
 function App() {
  
  const [mode, setMode] = useState(`dark`)
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

  const toggleMode = () =>{
    if(mode === 'light') {
      setMode ('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success")
    }else {
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    }
   
  }
  return (
    <>
      
      {/* <Navbar title="TextUltis" aboutText="about TextUtlis" /> */}
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
      </div>
      
    </>
  );
}
export default App