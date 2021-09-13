import React, { useContext, useRef, useState, useEffect } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import InputComponent from '../../components/InputComponent'
import AppContext from '../../state/AppContext'
import StepComponent from '../../components/StepComponent';
import { useHistory } from 'react-router';

export let storage = {
    park: false,
    isCover: false
}

const Step6 = () => {
    const history = useHistory();
    const [park, setPark] = useState(storage.park);
    const [isCover, setIsPark] = useState(storage.isCover);
    const [showOption, setShowOption] = useState(park);
    const [valid, setValid] = useState(Boolean(park));
    const parkInput = useRef(null);
    const isCoverInput = useRef(null);

    const handleInput = (park, value) => {
        if (park) {
            setPark(value);
            setShowOption(park)
        }
        storage = { ...storage, [park]: value };
    };

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault();
        }

        if (!valid) {
            alert("Introduce un email valido");
            return;
        }

        history.push("/apartamento-precio");
    };


    return (
        <ViewContainer>
            <StepComponent
                pathBefore={"/apartamento-servicios"}
                pathAfter={"apartamento-precio"}
                current={6} prevDisabled={false} nextDisabled={!valid} />
            <FormContainer onSubmit={handleSubmit}>
                <h3>Tu apartamento cuenta con estacionamiento?</h3>
                <div>
                    <div className="ans-ew">
                        <InputComponent
                            required
                            type="checkbox"
                            ref={isCoverInput}
                            label="Si"
                            id="isCover"
                            name="isCover"
                            value={isCover}
                            onChange={(e) => handleInput("isCover", ...e.currentTarget.value)}
                        />
                        <InputComponent
                            required
                            type="checkbox"
                            ref={isCoverInput}
                            label="No"
                            id="isCover"
                            name="isCover"
                            value={isCover}
                            onChange={(e) => handleInput("isCover", ...e.currentTarget.value)}
                        />
                    </div>
                </div>
            </FormContainer>

        </ViewContainer>
    )
}

export default Step6
