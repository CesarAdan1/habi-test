import React, { useContext } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent, { Dropdown } from '../../components/InputComponent'

const Step9 = ({setForm, formData, navigation}) => {
    const { previous, next } = navigation;
    const { elevator } = formData;

    return (
        <ViewContainer>
            <FormContainer>
                <h3>Tu apartamento cuenta con elevador?</h3>
                <InputComponent
                    label="Cuenta con elevador"
                    name="elevator"
                    value={elevator}
                    onChange={setForm}
                />
                <div className="w3-bar">
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={previous}
                        text="Foto"
                    />
                    <ButtonComponent
                        className="w3-button w3-white w3-border w3-right"
                        type="button"
                        onClick={next}
                        text="Completar"
                    />
                </div>
            </FormContainer>

        </ViewContainer>
    )
}

export default Step9
