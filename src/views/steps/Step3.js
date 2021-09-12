import React, { useContext, useRef, useState, useEffect } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import InputComponent from '../../components/InputComponent'
import AppContext from '../../state/AppContext'
import { useHistory } from 'react-router';
import StepComponent from '../../components/StepComponent';

export let storage = {
    address: ""
}

export const validateAddress = (address) => address.length > 0;

const Step3 = () => {
    const history = useHistory
    const [address, setAddress] = useState(storage.address);
    const [valid, setValid] = useState(Boolean(validateAddress(address)));
    const addressInput = useRef(null);

    useEffect(() => {
        setValid(Boolean(validateAddress(address)))
    }, [address]);

    const handleInput = (address, value) => {
        if (address === "address") {
          setAddress(value);
        }
        storage = { ...storage, [address]: value };
      };

      const handleSubmit = (e) => {
        if (e) {
          e.preventDefault();
        }
    
        if (!valid) {
          alert("Introduce una direccion valida");
          return;
        }
    
        history.push("/apartamento-piso");
      };

    return (
        <ViewContainer>
             <StepComponent 
             pathBefore={"/datos-cliente-email"}
             pathAfter={"apartamento-piso"}
             current={3} prevDisabled={false} nextDisabled={!valid} />
            <FormContainer
                onSubmit={handleSubmit}
            >
                
                <h3>Direccion del apartamento</h3>
                <InputComponent
                    required
                    label="Direccion del apartamento"
                    ref={addressInput}
                    name="address"
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => handleInput("address", e.currentTarget.value)}
                    onBlur={validateAddress}
                />
            </FormContainer>

        </ViewContainer>
    )
}

export default Step3
