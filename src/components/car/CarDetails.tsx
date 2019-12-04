import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useCarDetailsFormValidator } from './carDetailsValidator';

const SAVE_CAR_DETAILS = gql`
  mutation saveCarDetails($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const initialState: CarProperties = { 
    make: '', 
    model: '',
    registrationNumber: ''
};

export const CarDetails: React.FC<CarDetailsProps> = (props: CarDetailsProps) => {
    const [values, handleChange] = useCarDetailsFormValidator(initialState, () => false);
    const onClick = () => {
        console.log(`submitting values `, values);
    }
    return (
        <div className="col-md-5">
        <form action="#" className="bg-white rounded pb_form_v1">
          <h2 className="mb-4 mt-0 text-center">Enter your car details</h2>
          <div className="form-group">
            <input type="text" 
                   className="form-control py-3 reverse" 
                   name='make'
                   onChange={handleChange}
                   value={values.make}
                   placeholder="Make .." />
          </div>
          <div className="form-group">
            <input type="text" 
                   className="form-control py-3 reverse" 
                   name="model"
                   onChange={handleChange}
                   value={values.model}
                   placeholder="Model .." />
          </div>
          <div className="form-group">
            <input type="text" 
                   className="form-control py-3 reverse" 
                   name="registrationNumber"
                   onChange={handleChange}
                   value={values.registrationNumber}                   
                   placeholder="Registration no .." />
          </div>
          <div className="form-group">
            <input type="button" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" onClick={onClick} value="Submit" />
          </div>
        </form>
      </div>        
    );
}


export interface CarDetailsProps {

}

export interface CarProperties {
    make: string;
    model: string;
    registrationNumber: string;
}