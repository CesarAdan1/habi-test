import React from 'react'
import '../static/btn.css'

const ButtonComponent = ({type, text, onClick, props}) => {
    return (
        <div className="btn-container">
            <div>
                <button {...props} type={type} onClick={onClick}>
                    {text}
                </button>
            </div>
        </div>
    )
}

export default ButtonComponent
