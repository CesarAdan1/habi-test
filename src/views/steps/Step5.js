import React, { useContext, useRef, useState, useEffect } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import InputComponent from '../../components/InputComponent'
import AppContext from '../../state/AppContext'
import StepComponent from '../../components/StepComponent';
import { useHistory } from 'react-router';
import { options } from '../../utils/helpers';

export const storage = {
    services: {
        bbq: false,
        salon: false,
        parkPlay: false
    }
}

const Step5 = () => {
    const history = useHistory();
    const [services, setServices] = useState(new Array(options.length).fill(false));
    const [valid, setValid] = useState(Boolean(services));
    const serviceInput = useRef(null);

    useEffect(() => {
        setValid(Boolean(services))
    }, [services]);

    const handleInput = (position, value) => {
        const updatedCheckedState = services.map((item, index) =>
        index === position ? !item : item
      );
  
      setServices(updatedCheckedState);
        //storage = { ...storage, [services]: value };
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

                <h3>Tu apartamento cuenta con alguno de estos servicios?<small>(opcional)</small></h3>
                <div>
                    {options.map(({name, index}) => (
                        <InputComponent
                            required={false}
                            type="checkbox"
                            htmlFor={`custom-checkbox-${index}`}
                            label={name}
                            checked={setServices[index]}
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={name}
                            onChange={() => handleInput(index)}
                        />
                    ))}
                </div>
            </FormContainer>
        </ViewContainer>
    )
}

export default Step5
