import React, { useContext } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent, { Dropdown } from '../../components/InputComponent'

const Step5 = ({setForm, formData, navigation}) => {
    const { previous, next } = navigation;
    const { services } = formData;

    return (
        <ViewContainer>
            <FormContainer>
                <h3>En que piso se encuentra tu apartamento</h3>
                <Dropdown
                    label="Numero de Pisos"
                    name="services"
                    value={services}
                    onChange={setForm}
                />
                <div className="w3-bar">
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={previous}
                        text="Numero de pisos "
                    />
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={next}
                        text="Adicional 2"
                    />
                </div>
            </FormContainer>

        </ViewContainer>
    )
}

export default Step5
