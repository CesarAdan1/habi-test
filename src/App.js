import React from 'react'
import Routes from './navigation/Routes'
import { BrowserRouter as Route } from 'react-router-dom'
import {AppProvider} from './state/AppContext'
import './static/styles.css'

const App = () => {
    return (
        <AppProvider> 
            <Route>
                <Routes />
            </Route>
        </AppProvider>
    )
}

export default App
