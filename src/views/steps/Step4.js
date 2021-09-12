import React, { useContext, useRef, useState, useEffect } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import { Dropdown } from '../../components/InputComponent'
import AppContext from '../../state/AppContext'
import StepComponent from '../../components/StepComponent';
import { useHistory } from 'react-router';
import { floor } from '../../utils/helpers';

export let storage = {
   piso: null
}

const Step4 = () => {
    const history = useHistory();
    const [piso, setPiso] = useState(storage.piso);
    const [valid, setValid] = useState(piso);
    const pisoInput = useRef(null);

    useEffect(() => {
        setValid(piso)
    }, [piso]);

    const handleInput = (piso, value) => {
        if (piso === "piso") {
          setPiso(value);
        }
        storage = { ...storage, [piso]: value };
      };

      const handleSubmit = (e) => {
        if (e) {
          e.preventDefault();
        }
    
        if (!valid) {
          alert("Introduce un piso valido");
          return;
        }
    
        history.push("/apartamento-servicios");
      };

    return (
        <ViewContainer>
             <StepComponent 
                pathBefore={"/direccion-apartamento"}
                pathAfter={"apartamento-servicios"}
                current={4} prevDisabled={false} nextDisabled={!valid} />
            <FormContainer onSubmit={handleSubmit}>
            
                <h3>Piso en el que se encuentra tu apartamento</h3>
                <Dropdown
                    required
                    ref={pisoInput}
                    name="piso"
                    id="piso"
                    value={piso}
                    onChange={(e) => handleInput("piso", e.currentTarget.value)}
                    options={floor}
                />
                
            </FormContainer>

        </ViewContainer>
    )
}

export default Step4
