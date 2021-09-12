import React from 'react'
import FormContainer from '../containers/FormContainer';
import ViewContainer from '../containers/ViewContainer';
import ButtonComponent from '../components/ButtonComponent'

const ResumeView = ({ formData, navigation }) => {
    const { names, email, address, floor, services,
        park, price, photo, elevator } = formData;
    const { go } = navigation;

    return (
        <ViewContainer>
            <h3>Resumen de tu Informacion</h3>

            <FormContainer className="w3-bar">
                <div>
                    {" "}
                    Nombre completo: {`${names}`},
                    <br />
                </div>
                <div>
                    Correo electronico: {`${email}`},
                    <br />
                    Direccion del departamento: {` ${address}`},
                    <br />
                    Ubicado en el piso: {`${floor}`},
                    <br />
                    Servicios adicionales: {`${services}`}
                    <br />
                </div>
                <div>
                    Estacionamiento: {`${park}`},
                    <br />
                    Precio: {`${price}`}
                    <br />
                    Foto: {`${photo}`}
                    <br />
                    Cuenta con elevador: {`${elevator}`}
                </div>
                <ButtonComponent
                    className="w3-button w3-border w3-right"
                    type="button"
                    onClick={() => go('confirmation')}
                    text=" Enviar informacion"
                />
            </FormContainer>
        </ViewContainer>
    )
}

export default ResumeView
