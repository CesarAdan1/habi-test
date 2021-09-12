import React from 'react'

const MainView = React.lazy(() => import('./MainView'));
const Step1 = React.lazy(() => import('./steps/Step1'));
const Step2 = React.lazy(() => import('./steps/Step2'));
const Step3 = React.lazy(() => import('./steps/Step3'));
const Step4 = React.lazy(() => import('./steps/Step4'));
const Step5 = React.lazy(() => import('./steps/Step5'));
const Step6 = React.lazy(() => import('./steps/Step6'));
const Step7 = React.lazy(() => import('./steps/Step7'));
const Step8 = React.lazy(() => import('./steps/Step8'));
const Step9 = React.lazy(() => import('./steps/Step9'));
const ResumeView = React.lazy(() => import('./ResumeView'));
const SubmitView = React.lazy(() => import('./SubmitView'));


export { MainView, Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8, Step9, ResumeView, SubmitView
}