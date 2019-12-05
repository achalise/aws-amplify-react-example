import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useCarDetailsFormValidator } from './carDetailsValidator';
import { withRouter } from 'react-router';

const SAVE_CAR_DETAILS = gql`
  mutation SaveCarDetails($make: String, $model: String, $registrationNumber: String) {
    saveCarDetails(make: $make, model: $model, registrationNumber: $registrationNumber)
  }
`;

const initialState: CarProperties = {
  make: '',
  model: '',
  registrationNumber: ''
};

const CarDetails: React.FC<any> = (props: any) => {
  const [saveCar, { data }] = useMutation(SAVE_CAR_DETAILS);
  const [values, handleChange] = useCarDetailsFormValidator(initialState, () => false);
  const onClick = () => {
    console.log(`submitting values `, values);
    saveCar({ variables: { make: values.make, model: values.model, registrationNumber: values.registrationNumber } })
    .then(() => {
        props.history.push('/cars')
    })
    .catch(e => console.log(`Error while saving`, e));
  }
  return (
    <div className="row align-items-center justify-content-center">
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
    </div>
  );
}

export default withRouter(CarDetails);

export interface CarDetailsProps {
    props: any;
    history?: any
}

export interface CarProperties {
  make: string;
  model: string;
  registrationNumber: string;
}