import { CarDetailsProps, CarProperties } from "./CarDetails";
import { useState, ChangeEventHandler } from "react";

export const useCarDetailsFormValidator = (initialState: any, validate: () => boolean) => {
    const [state, setState] = useState(initialState);
    const handleChange = (event: any) => {
        let validationResult = validate();
        setState({...state, [event.target.name]: event.target.value});
    }
    return [state, handleChange];
}
