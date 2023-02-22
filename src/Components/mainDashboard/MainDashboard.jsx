import React from 'react'
import './mainDashboard.css';
import Cards from '../Cards/Cards';

const MainDashboard = () => {
  return (
    <div>
      <div className="mainDashboard">
      <h1 style={{marginLeft:"5rem"}}>Dashboard</h1>
       <div className = "carts">
         < Cards  />
       </div>
       
      </div>
    </div>
  )
}

export default MainDashboard
