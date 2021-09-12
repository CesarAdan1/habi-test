import React, { useContext } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent, { Dropdown } from '../../components/InputComponent'

const Step4 = ({setForm, formData, navigation}) => {
    const { previous, next } = navigation;
    const { floor } = formData;

    return (
        <ViewContainer>
            <FormContainer>
                <h3>En que piso se encuentra tu apartamento</h3>
                <Dropdown
                    label="Numero de Pisos"
                    name="floor"
                    value={floor}
                    onChange={setForm}
                />
                <div className="w3-bar">
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={previous}
                        text="Direccion "
                    />
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={next}
                        text="Adicionales"
                    />
                </div>
            </FormContainer>

        </ViewContainer>
    )
}

export default Step4
