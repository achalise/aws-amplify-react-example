import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';


// const GET_CARS = gql`
//   query getCars($type: String) {
//     getCars() {
//       make
//     }
//   }
// `;

const GET_CARS = gql`
{
    getCars {
        make
    }
}
`;

export const CarList: React.FC<CarListProps> = (props) => {
    const {loading, error, data} = useQuery(GET_CARS);
    if(loading) {
        return <p>Loading ...</p>
    }
    if(error) {
        return <p>{error}</p>
    }
    return (
        <>
        {data.getCars.map((p: any) => (
            <div>{p.make}</div>
        )
        )}
        </>
    )
}

export interface CarListProps {}