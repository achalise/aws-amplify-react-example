import React from 'react';
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
    const { loading, error, data } = useQuery(GET_CARS);
    if (loading) {
        return <p>Loading ...</p>
    }
    if (error) {
        return <p>{error}</p>
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
                {data.getCars.map((p: CarProperties) => (
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