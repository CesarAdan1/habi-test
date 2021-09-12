import {SAVE_NAME, SAVE_EMAIL, SAVE_ADDRESS, SAVE_FLOOR,
    SAVE_SERVICES, SAVE_PARK, SAVE_PRICE, SAVE_PHOTO,
    SAVE_ELEVATOR, SUBMIT_FORM
} from './types';

export const initialState = {
    name: "",
    email: "",
    address: "",
    piso: 0,
    services: [
        {
            service: "Zona BBQ",
            status: false
        },
        {
            service: "Salon comunal",
            status: false

        },
        {
            service: "Parque de juegos",
            status: false

        },
    ],
    park: false,
    price: 1000000,
    photo: "",
    elevator: false,
    message: "",
    data: [],
    validationErrors: {
        name: "",
        email: "",
        address: "",
        piso: 0, 
        park: false,
        price: 1000000,
        elevator: false,
    },
    isSubmit: false
}

const handleInput = e => {
    dispatch({
        type: SAVE_NAME,
        payload: { [e.target.name] : e.target.value}
    })
}

const handleSubmit = e => {

}

const saveName = () => {
    dispatch({
        type: SAVE_NAME,
        payload: { [e.target.name] : e.target.value}
    })
}

const saveEmail = () => {
    dispatch({
        type: SAVE_EMAIL,
        payload: { [e.target.email] : e.target.value}
    })
}

const saveAddress = () => {

}

const saveFloor = () => {

}

const saveServices = () => {

}

const savePark = () => {

}

const savePrice = () => {

}

const savePhoto = () => {

}

const saveElevator = () => {

}

const submitInfo = () => {

}

export const reducer = (state, action) => {
    switch (action.type) {
        case SAVE_NAME:
            return {
                ...state,
                name: action.name
            };
        case SAVE_EMAIL:
            return {
                ...state,
                email: action.email
            };
        case SAVE_ADDRESS:
            return {
                ...state,
                address: action.address
            };
        case SAVE_FLOOR:
            return {
                ...state,
                floor: action.floor
            };
        case SAVE_SERVICES:
            return {
                ...state,
                services: action.services
            };
        case SAVE_PARK:
            return {
                ...state,
                park: action.park
            };
        case SAVE_PRICE:
            return {
                ...state,
                price: action.price
            };
        case SAVE_PHOTO:
            return {
                ...state,
                photo: action.photo
            };
        case SAVE_ELEVATOR:
            return {
                ...state,
                elevator: action.elevator
            };
        case SUBMIT_FORM:
            return {
                ...state,
                data: action.data
            };
        default:
            return {
                ...state
            };
    }
};
