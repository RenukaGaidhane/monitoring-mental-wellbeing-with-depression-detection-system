import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Nav";
import {  Route, BrowserRouter, Routes } from 'react-router-dom';
import Test from "./Components/Test";
import Question from "./Components/Question";
import { useEffect } from "react";
import Result from "./Components/Result";
import Error from "./Components/error";

function App() {
 
  return (
    <div className="App" style={{scrollBehavior:'smooth'}}>
      <BrowserRouter>
       <Navbar/>
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="About" element={<About/>} />
          <Route exact path="Contact" element={<Contact/>} />
          <Route exact path="Test" element={<Test/>} />
          <Route exact path="Question" element={<Question/>} />
          <Route exact path="result/:id" element={<Result/>} />
          <Route exact path="*" element={<Error/>} />
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
