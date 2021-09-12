import React, { useContext } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent from '../../components/InputComponent'

const Step2 = ({ setForm, formData, navigation }) => {
    const { previous, next } = navigation;
    const { email } = formData;

    return (
        <ViewContainer>
            <FormContainer>
                <h3>Correo electronico</h3>
                <InputComponent
                    label="Correo electronico"
                    name="email"
                    value={email}
                    onChange={setForm}
                />
                <div className="w3-bar">
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={previous}
                        text="Nombre y apellido ›"
                    />
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={next}
                        text="Direccion"
                    />
                </div>
            </FormContainer>

        </ViewContainer>
    )
}

export default Step2
