import React, { Suspense, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Component } from 'react/cjs/react.production.min';
import routes from '../utils/paths.json'
import {
    MainView, Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8, Step9, ResumeView
} from '../views'

const componentRegistry = {
    "MainView": MainView,
    "Step1": Step1,
    "Step2": Step2,
    "Step3": Step3,
    "Step4": Step4,
    "Step5": Step5,
    "Step6": Step6,
    "Step7": Step7,
    "Step8": Step8,
    "Step9": Step9,
    "ResumeView": ResumeView
}

const Routes = (props) => {
    const history = useHistory()
    //const [routes, setRoutes] = useState([])
    return (
        <Switch>
            <Suspense fallback={<div className="center-load">Loading...</div>}>
               <Route exact path="/" component={MainView} />
                <Route exact path="/datos-cliente" component={Step1} />
                <Route exact path="/datos-cliente-email" component={Step2} />
                <Route exact path="/direccion-apartamento" component={Step3} />
                <Route exact path="/apartamento-piso" component={Step4} />
                <Route exact path="/apartamento-servicios" component={Step5} />
                <Route exact path="/apartamento-park" component={Step6} />
                <Route exact path="/apartamento-precio" component={Step7} />
                <Route exact path="/fotos-apartamento" component={Step8} />
                <Route exact path="/apartamento-elevator" component={Step9} />
                <Route exact path="/resumen" component={ResumeView} /> 
            {
                    routes.map(({path, component: Component}) => {
                        <Route key={path.index}
                            render={props => <Component {...props}/>}
                            exact path={path.path} >
                        </Route>
                    })
                } 
            </Suspense>
        </Switch>

    )
}

export default Routes
