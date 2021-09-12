import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import paths from '../utils/paths.json'
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
import StepperView from '../views/StepperView';

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
    console.log(props)
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/" component={MainView} />
                <Route exact path="/datos-cliente" component={Step1} />
                <Route exact path="/datos-cliente-email" component={Step2} />
                <Route exact path="/direccion-apartament" component={Step3} />
                <Route exact path="/apartamento-piso" component={Step4} />
                <Route exact path="/apartamento-servicios" component={Step5} />
                <Route exact path="/apartamento-park" component={Step6} />
                <Route exact path="/apartamento-precio" component={Step7} />
                <Route exact path="/fotos-apartamento" component={Step8} />
                <Route exact path="/apartamento-elevator" component={Step9} />
                <Route exact path="/resumen" component={ResumeView} />
               {/*  {
                    paths.map((path) => {
                        <Route key={path.index}
                            component={componentRegistry[path.component]}
                            exact path={`${path.path}`} >

                        </Route>
                    })
                } */}
            </Suspense>
        </Switch>

    )
}

export default Routes
