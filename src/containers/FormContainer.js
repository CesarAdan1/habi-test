import React from 'react'

const FormContainer = (props) => {
    return (
        <form 
            noValidate
            autoComplete="off"
            className="form"
            onSubmit={props.onSubmit}
        >
            {props.children}
        </form>
    )
}

export default FormContainer
