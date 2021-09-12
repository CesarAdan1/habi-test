import React, { useState } from 'react'
import { useForm, useStep } from 'react-hooks-helper';
import {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8, Step9, ResumeView
} from './index'
import { Link } from 'react-router-dom'

const steps = [
    { id: "names" },
    { id: "email" },
    { id: "address" },
    { id: "floor" },
    { id: "services" },
    { id: "park" },
    { id: "price" },
    { id: "photo" },
    { id: "elevator" }
];

const defaultData = {
    names: "Bilbo Baggins",
    email: "email@gmail.com",
    address: "Ciudad de Mexico",
    floor: "5",
    services: true,
    park: true,
    price: "5000000",
    photo: "ritz.png",
    elevator: false
};

const StepperView = ({ url }) => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    const props = { formData, setForm, navigation };

    switch (id) {
        case "names":
            return <Link to="/datos-cliente">
                        <Step1 {...props} />
                    </Link>;
        case "email":
            return <Link to="/datos-cliente-email">
                        <Step2 {...props} />
                    </Link>
        case "address":
            return <Link to="/direccion-apartamento"><Step3 {...props} /></Link>;
        case "floor":
            return <Link to="/apartamento-piso"><Step4 {...props} /></Link>;
        case "services":
            return <Link to="/apartamento-servicios"><Step5 {...props} /></Link>;
        case "park":
            return <Link to="/apartamento-park"><Step6 {...props} /></Link>;
        case "price":
            return <Link to="/apartamento-precio"><Step7 {...props} /></Link>;
        case "photo":
            return <Link to="/fotos-apartamento"><Step8 {...props} /></Link>;
        case "elevator":
            return <Link to="/apartamento-elevator"><Step9 {...props} /></Link>;
        case "resume":
            return <Link to="/resumen"><ResumeView {...props} /></Link>;
        case "submit":
            return <Link to="/submit"><SubmitView {...props} /></Link>;
        default:
            return null;
    }
};

export default StepperView
