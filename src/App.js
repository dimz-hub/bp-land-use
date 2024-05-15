import React from "react";
import {Route, Routes} from 'react-router-dom'
import Landingpage from "./components/Landingpage";
import DocumentForm from "./components/DocumentForm";


function App() {
  return (
    <div >
     <Routes>
      <Route path="/" element = {<Landingpage />}/>
      <Route path="/obtain-document" element = {<DocumentForm />}/>
      </Routes>
    </div>
  );
}

export default App;
