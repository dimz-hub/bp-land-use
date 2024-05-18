import React from "react";
import {Route, Routes} from 'react-router-dom'
import Landingpage from "./components/Landingpage";
import DocumentForm from "./components/DocumentForm";
import Register from "./components/Register";
import Login from "./components/Login";
import Admin from "./components/Admin";



function App() {
  return (
    <div >
     <Routes>
      <Route path="/" element = {<Landingpage />}/>
      <Route path="/obtain-document" element = {<DocumentForm />}/>
      <Route path="/register" element = {<Register />}/>
      <Route path="/login" element = {<Login />}/>
      <Route path="/admin" element = {<Admin />}/>
      </Routes>
    </div>
  );
}

export default App;
