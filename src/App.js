import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  return (
    <>
   <Navbar/>
        <div className="container">
        <Textform/>
    </div>
  
   </> 
  );
}

export default App;
