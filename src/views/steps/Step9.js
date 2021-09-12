import React, { useContext, useRef, useState, useEffect } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent from '../../components/InputComponent'
import AppContext from '../../state/AppContext'
import { useHistory } from 'react-router';
import StepComponent from '../../components/StepComponent';


export let storage = {
    elevator: false
  }

const Step9 = () => {
    const history = useHistory();
    const [elevator, setElevator] = useState(storage.elevator);
    const [valid, setValid] = useState(Boolean(elevator));
    const elevatorInput = useRef(null);

    useEffect(() => {
        setValid(Boolean(elevator))
    }, [elevator]);

    const handleInput = (elevator, value) => {
        if (elevator === "elevator") {
          setElevator(value);
        }
        storage = { ...storage, [elevator]: value };
      };

      const handleSubmit = (e) => {
        if (e) {
          e.preventDefault();
        }
    
        history.push("/resumen");
      };

    return (
        <ViewContainer>
             <StepComponent 
                pathBefore={"/fotos-apartamento"}
                pathAfter={"resumen"}
                current={9} prevDisabled={false} nextDisabled={!valid} />
            <FormContainer onSubmit={handleSubmit}>
                <h3>Tu apartamento cuenta con elevador?</h3>
                <InputComponent
                    required
                    type="checkbox"
                    ref={elevatorInput}
                    label="Elevador"
                    id="elevator"
                    name="elevator"
                    value={elevator}
                    onChange={(e) => handleInput("elevator", ...e.currentTarget.value)}
                />
            </FormContainer>

        </ViewContainer>
    )
}

export default Step9
