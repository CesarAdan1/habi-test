import React from 'react'
import Routes from './navigation/Routes'
import { BrowserRouter as Route } from 'react-router-dom'
import AppProvider from './state/AppContext'
import './static/app.css'

const App = () => {
    return (
        <AppProvider value={{ isReviewMode: false }}> 
            <Route>
                <Routes>
                    
                </Routes>
            </Route>
        </AppProvider>
    )
}

export default App
