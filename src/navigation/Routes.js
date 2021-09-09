import React, {Suspense} from 'react'
import { Switch, Route } from 'react-router-dom';
import paths from '../utils/paths.json'
import {
    MainView, ClienteView , PrecioView, StepperView,
    ApartmentView, ResumeView
} from '../views'

const componentRegistry = {
    "MainView": MainView,
    "ClienteView": ClienteView,
    "PrecioView": PrecioView,
    "StepperView": StepperView,
    "ApartmentView": ApartmentView,
    "ResumeView": ResumeView
}

const Routes = (props) => {
    console.log(props)
    return (
        
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/datos-cliente" component={StepperView }/>
                {
                    paths.map((path) => {
                        <Route key={path.index} components={componentRegistry[path.component]} exact path={`${path.path}`} >
                        </Route>
                    })
                }
            </Suspense>   
        </Switch>
        
    )
}

export default Routes
