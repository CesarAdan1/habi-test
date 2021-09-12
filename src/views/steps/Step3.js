import React, { useContext } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent from '../../components/InputComponent'

const Step3 = ({ setForm, formData, navigation }) => {
    const { previous, next } = navigation;
    const { address } = formData;

    return (
        <ViewContainer>
            <FormContainer>
                <h3>Direccion del apartamento</h3>
                <InputComponent
                    label="Direccion del apartamento"
                    name="address"
                    value={address}
                    onChange={setForm}
                />
                <div className="w3-bar">
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={previous}
                        text="Correo "
                    />
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={next}
                        text="Numero de pisos"
                    />
                </div>
            </FormContainer>

        </ViewContainer>
    )
}

export default Step3
