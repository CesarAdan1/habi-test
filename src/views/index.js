import React from 'react'

const MainView = React.lazy(() => import('./MainView'));
const ClienteView = React.lazy(() => import('./ClienteView'));
const PrecioView = React.lazy(() => import('./PrecioView'));
const StepperView = React.lazy(() => import('./StepperView'));
const ApartmentView = React.lazy(() => import('./ApartmentView'));
const ResumeView = React.lazy(() => import('./ResumeView'));


export { MainView, ClienteView , PrecioView, StepperView,
    ApartmentView, ResumeView
}