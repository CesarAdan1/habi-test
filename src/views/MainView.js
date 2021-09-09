import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../static/main-view.css'

const MainView = () => {
   

    return (
        <div className="main-view">
          <div className="main-view-1">
              <div className="main-view-2">
                  <h1>Compramos tu casa </h1>
                <Link to="/datos-cliente">
                    Vender
                </Link>  
              </div>
              
          </div>
        </div>
    )
}

export default MainView
