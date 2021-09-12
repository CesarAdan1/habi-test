import React, { useContext, useRef, useState, useEffect } from 'react'
import ViewContainer from '../../containers/ViewContainer'
import FormContainer from '../../containers/FormContainer'
import InputComponent from '../../components/InputComponent'
import ButtonComponent from '../../components/ButtonComponent'
import AppContext from '../../state/AppContext'
import { useHistory } from "react-router-dom";
import StepComponent from '../../components/StepComponent'

export const storage = {
    name: ""
}

export const validateName = (name) => name.length > 0;

const Step1 = () => {
    const history = useHistory();
    const completeNameInput = useRef(null);
    const [name, setName] = useState(storage.name);
    const [valid, setValid] = useState(Boolean(validateName(name)));

    const handleSubmit = (e) => {
        if (e) {
          e.preventDefault();
        }
    
        if (!valid) {
          alert("Completa los campos");
          return;
        }
    
        history.push("/datos-cliente-email");
      };

      const handleInput = (name, value) => {
        if (name === "name") {
          setName(value);
        }
        storage = { ...storage, [name]: value };
      };

      useEffect(() => {
        setValid(Boolean(validateName(name) && validateEmail(email)));
      }, [name, validateName]);

    return (
        <ViewContainer>
            <StepComponent current={1} prevDisabled={true} nextDisabled={!valid} />
            <FormContainer
                onSubmit={handleSubmit}
            >
                <InputComponent
                    required
                    pattern="\.\+"
                    ref={completeNameInput}
                    label="Nombre y apellido"
                    name="names"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => handleInput("name", e.currentTarget.value)}
                />
                
            </FormContainer>

        </ViewContainer>
    )
}

export default Step1
