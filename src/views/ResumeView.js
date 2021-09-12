import React, { useContext, useRef, useState, useEffect } from 'react'
import FormContainer from '../containers/FormContainer';
import ViewContainer from '../containers/ViewContainer';
import ButtonComponent from '../components/ButtonComponent'
import { useAppContext } from '../state/AppContext'

export const Resume = () => {
    const { stepper } = useAppContext();

    useEffect(() => {
    }, []);

    const localStorageAnswers = JSON.parse(
        localStorage.getItem("localAnswers") || "[]"
    );

    const onClickCancel = () => {

    }

    const onClickSend = () => {

    }

    const handleSubmit = () => { }
    return (
        <div>
            <FormContainer onSubmit={handleSubmit} className="w3-bar">
                <div>
                    {" "}
                    Nombre completo: {`${stepper.name}`}
                    <br />
                </div>
                <div>
                    Correo electronico: {`${stepper.email}`}
                    <br />
                    Direccion del departamento: {` ${stepper.address}`}
                    <br />
                    Ubicado en el piso: {`${stepper.piso}`}
                    <br />
                    Servicios adicionales: 
                    <div className="column-f">
                        {Object.entries(stepper.services).map((serv) => (
                           <span style={{padding: '0 12px'}} key={serv.service}>
                               <span style={{padding: '0 8px', color: 'black'}}>{serv.service}</span>
                               <span>{serv.status === false ? "No" : "Si" }</span>
                            </span>
                        ))}
                    </div>
                    <br />
                </div>
                <div>
                    Estacionamiento: <span>{stepper.park}{stepper.park ? "Si" : "No"}</span>
                    <br />
                    Precio: {`${stepper.price}`}
                    <br />
                    Foto: {`${stepper.photo}`}
                    <br />
                    Cuenta con elevador: <span>{stepper.elevator}{stepper.elevator ? "Si" : "No"}</span>
                </div>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <ButtonComponent
                        className="mr-sp"
                        type="button"
                        onClick={onClickSend}
                        text=" Enviar informacion"

                    />
                </div>
            </FormContainer>
        </div>
    )
}

const ResumeView = () => {

    return (
        <ViewContainer>
            <h1>Resumen de tu Informacion</h1>

            <Resume />
        </ViewContainer>
    )
}

export default ResumeView
