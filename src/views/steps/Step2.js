import React, { useContext, useRef, useState, useEffect } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import InputComponent from '../../components/InputComponent'
import AppContext from '../../state/AppContext'
import heyRegex from "hey-regex";
import StepComponent from '../../components/StepComponent';
import { useHistory } from 'react-router';


export let storage = {
    email: ""
}

export const validateEmail = (email) =>
  email && heyRegex.isEmailId(email, "common");

const Step2 = () => {
  
    const history = useHistory();
    const [email, setEmail] = useState(storage.email);
    const [valid, setValid] = useState(Boolean(validateEmail(email)));
    const emailInput = useRef(null);

    useEffect(() => {
        setValid(Boolean(validateEmail(email)))
    }, [email, validateEmail]);

    const handleInput = (email, value) => {
        if (email === "email") {
          setEmail(value);
        }
        storage = { ...storage, [email]: value };
      };

      const handleSubmit = (e) => {
        if (e) {
          e.preventDefault();
        }
    
        if (!valid) {
          alert("Introduce un email valido");
          return;
        }
    
        history.push("/direccion-apartamento");
      };

    return (
        <ViewContainer>
            <StepComponent 
            pathBefore={"/datos-cliente"}
            pathAfter={"direccion-apartamento"}
            current={2} prevDisabled={false} nextDisabled={!valid} />
            <FormContainer onSubmit={handleSubmit}>
                <h3>Correo electronico</h3>
                <InputComponent
                    required
                    label="Correo electronico"
                    ref={emailInput}
                    name="email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => handleInput("email", e.currentTarget.value)}
                    onBlur={validateEmail}
                />
            </FormContainer>

        </ViewContainer>
    )
}

export default Step2
