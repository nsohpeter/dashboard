import React from 'react';
import './App.css';
import MainDashboard from './Components/mainDashboard/MainDashboard';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
     <div className="Appglass">
       <Sidebar />
       <MainDashboard />

      </div> 
    
    </div>
  );
}

export default App;
