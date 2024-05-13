import React from "react";
import {Route, Routes} from 'react-router-dom'
import Landingpage from "./components/Landingpage";
function App() {
  return (
    <div >
     <Routes>
      <Route path="/" element = {<Landingpage />}/>
      </Routes>
    </div>
  );
}

export default App;
