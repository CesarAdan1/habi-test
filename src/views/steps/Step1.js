import React, { useContext, useRef, useState, useEffect } from 'react'
import ViewContainer from '../../containers/ViewContainer'
import FormContainer from '../../containers/FormContainer'
import InputComponent from '../../components/InputComponent'
import {useAppContext} from '../../state/AppContext'
import { useHistory } from "react-router-dom";
import StepComponent from '../../components/StepComponent'

export let storage = {
    name: ""
}

export const validateName = (name) => name.length > 0;

const Message = ({message}) => {
    return (
        <div>{message}</div>
    )
}

const Step1 = () => {
    const history = useHistory();
    const completeNameInput = useRef(null);
    const [name, setName] = useState(storage.name);
    const [valid, setValid] = useState(Boolean(validateName(name)));
    const [message, setMessage] = useState("")

    const { stepper } = useAppContext();

    useEffect(() => {
        setValid(Boolean(validateName(name)))
    }, [name, validateName]);

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault();
        }

        if (!valid) {
            setMessage({message: "Campo obligatorio"})
            return;
        }

        history.push("/datos-cliente-email");
    };

    const handleInput = (name, value) => {
        if (name === "name") {
            setName(value);
        }
        storage = { ...storage, [stepper.name]: value };
    };

    return (
        <ViewContainer>
            <StepComponent 
            pathAfter={"datos-cliente-email"}
            pathBefore={"/"}
            current={1} prevDisabled={false} nextDisabled={!valid}
             
            />
            <FormContainer
                onSubmit={handleSubmit}
            >
                <InputComponent
                    required
                    pattern="\.\+"
                    ref={completeNameInput}
                    label="Nombre y apellido"
                    name="name"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => handleInput("name", e.currentTarget.value)}
                    onBlur={validateName}
                />

            </FormContainer>
            <div style={{color: "red"}}>{message}</div>
        </ViewContainer>
    )
}

export default Step1
