import React, { useContext, useRef, useState, useEffect } from 'react'
import FormContainer from '../../containers/FormContainer';
import ViewContainer from '../../containers/ViewContainer';
import InputComponent, { Dropdown } from '../../components/InputComponent'
import AppContext from '../../state/AppContext'
import StepComponent from '../../components/StepComponent';
import { useHistory } from 'react-router';

export let storage = {
   price: 1000000
}

const Step7 = () => {
    const history = useHistory();
    const [price, setPrice] = useState(storage.price);
    const [valid, setValid] = useState(price);
    const priceInput = useRef(null);

    useEffect(() => {
        setValid(price)
    }, [price]);

    const handleInput = (price, value) => {
        if (price === "price") {
          setPrice(value);
        }
        storage = { ...storage, [price]: value };
      };

      const handleSubmit = (e) => {
        if (e) {
          e.preventDefault();
        }
    
        if (!valid) {
          alert("Introduce un piso valido");
          return;
        }
    
        history.push("/fotos-apartamento");
      };

    return (
        <ViewContainer>
             <StepComponent 
                pathBefore={"/apartamento-park"}
                pathAfter={"fotos-apartamento"}
                current={7} prevDisabled={false} nextDisabled={!valid} />
            <FormContainer onSubmit={handleSubmit}>
                <h3>Precio en que deseas venderlo?</h3>
                <InputComponent
                    required
                    ref={priceInput}
                    label="Precion en MN"
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => handleInput("price", ...e.currentTarget.value)}
                />
            </FormContainer>

        </ViewContainer>
    )
}

export default Step7
