import React, { useContext } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent, { Dropdown } from '../../components/InputComponent'


const Step6 = ({setForm, formData, navigation}) => {
    const { previous, next } = navigation;
    const { park } = formData;

    return (
        <ViewContainer>
            <FormContainer>
                <h3>En que piso se encuentra tu apartamento</h3>
                <InputComponent
                    label="Numero de Pisos"
                    name="park"
                    value={park}
                    onChange={setForm}
                />
                <div className="w3-bar">
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={previous}
                        text="Adicionales 2 "
                    />
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={next}
                        text="Precio"
                    />
                </div>
            </FormContainer>

        </ViewContainer>
    )
}

export default Step6
