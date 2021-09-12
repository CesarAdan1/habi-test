import React, { useContext } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent, { Dropdown } from '../../components/InputComponent'

const Step8 = ({setForm, formData, navigation}) => {
    const { previous, next } = navigation;
    const { photo } = formData;

    return (
        <ViewContainer>
            <FormContainer>
                <h3>Sube una foto de tu apartamento? <small>(opcional)</small></h3>
                <InputComponent
                    label="Cuenta con elevador"
                    name="photo"
                    value={photo}
                    onChange={setForm}
                />
                <div className="w3-bar">
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={previous}
                        text="Precio"
                    />
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={next}
                        text="Ascensor"
                    />
                </div>
            </FormContainer>

        </ViewContainer>
    )
}

export default Step8
