import React, { useContext, useRef, useState, useEffect } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import InputComponent, { Dropdown } from '../../components/InputComponent'
import AppContext from '../../state/AppContext'
import StepComponent from '../../components/StepComponent';
import { useHistory } from 'react-router';

export let storage = {
   photo: ""
}

const Step8 = () => {
    const history = useHistory();
    const [photo, setPhoto] = useState(storage.photo);
    const [valid, setValid] = useState(Boolean(photo));
    const photoInput = useRef(null);

    useEffect(() => {
        setValid(Boolean(photo))
    }, [photo]);

    const handleInput = (photo, value) => {
        if (photo === "") {
          setPhoto(value);
        }
        storage = { ...storage, [photo]: value };
      };

      const handleSubmit = (e) => {
        if (e) {
          e.preventDefault();
        }
    
        history.push("/apartamento-elevator");
      };

    return (
        <ViewContainer>
             <StepComponent 
                pathBefore={"/apartamento-precio"}
                pathAfter={"apartamento-elevator"}
                current={8} prevDisabled={false} nextDisabled={!valid} />
            <FormContainer onSubmit={handleSubmit}>
                <h3>Sube una foto de tu apartamento? <small>(opcional)</small></h3>
                <InputComponent
                    type="file"
                    required={false}
                    ref={photoInput}
                    label=""
                    id="photo"
                    name="photo"
                    value={photo}
                    onChange={(e) => handleInput("photo", ...e.currentTarget.value)}
                />
               <small>Archivos aceptados: .jpg, .jpeg, .png</small>
            </FormContainer>

        </ViewContainer>
    )
}

export default Step8
