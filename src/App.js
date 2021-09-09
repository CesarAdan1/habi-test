import React from 'react'
import Routes from './navigation/Routes'
import { BrowserRouter as Route } from 'react-router-dom'
import './static/app.css'

const App = () => {
    return (
        <Route >
            <Routes />
        </Route>
    )
}

export default App
