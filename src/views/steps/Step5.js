import React, { useContext, useRef, useState, useEffect } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import InputComponent from '../../components/InputComponent'
import AppContext from '../../state/AppContext'
import StepComponent from '../../components/StepComponent';
import { useHistory } from 'react-router';
import { options } from '../../utils/helpers';

export let storage = {
    services: {
        bbq: false,
        salon: false,
        parkPlay: false
    }
}

const Step5 = () => {
    const history = useHistory();
    const [services, setServices] = useState(storage.services);
    const [valid, setValid] = useState(Boolean(services));
    const serviceInput = useRef(null);

    useEffect(() => {
        setValid(Boolean(services))
    }, [services]);

    const handleInput = (services, value) => {
        if (services === "services") {
            setServices(value);
        }
        storage = { ...storage, [services]: value };
    };

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault();
        }

        history.push("/apartamento-park");
    };

    return (
        <ViewContainer>
            <StepComponent
                pathBefore={"/apartamento-piso"}
                pathAfter={"apartamento-park"}
                current={5} prevDisabled={false} nextDisabled={!valid} />
            <FormContainer onSubmit={handleSubmit}>

                <h3>Tu apartamento cuenta con alguno de estos servicios?<small>(opcional</small></h3>
                <div>
                    {Object.entries(options).map(([value, name]) => (
                        <InputComponent
                            key={value}
                            required={false}
                            type="checkbox"
                            ref={serviceInput}
                            label={name}
                            checked={options === value}
                            id={value}
                            name={value}
                            value={value}
                            onChange={(e) => handleInput("services", ...e.currentTarget.value)}
                        />
                    ))}
                </div>
            </FormContainer>

        </ViewContainer>
    )
}

export default Step5
