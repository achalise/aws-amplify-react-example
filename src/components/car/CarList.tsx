import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import { CarProperties } from './CarDetails';

const GET_CARS = gql`
{
    getCars {
        id
        make
        model
        registrationNumber
    }
}
`;

export const CarList: React.FC<CarListProps> = (props) => {
    const [state, setState] = useState({loading: false, data: {getCars: []}, error: undefined});
    let {loading, data, error} = useQuery(GET_CARS, {fetchPolicy: "network-only"});

    useEffect(() => {
        setState({...state, loading: loading, data: data});
    }, [data]);
    if (state.loading) {
        return <p>Loading ...</p>
    }
    if (state.error) {
        return <p>{state.error}</p>
    }
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Rego</th>
                    <th scope="col">Make</th>
                    <th scope="col">Model</th>
                </tr>
            </thead>
            <tbody>
                {state.data.getCars.map((p: CarProperties) => (
                    <tr key={Math.floor(Math.random() * 100)}>
                        <th scope="row">{p.registrationNumber}</th>
                        <td>{p.make}</td>
                        <td>{p.model}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    )
}

export interface CarListProps { }