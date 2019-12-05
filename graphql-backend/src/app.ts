import express, { Request, Response } from 'express';
import cors from 'cors';
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

let curIndex = 3;
const db = {
  cars: [
    {id: 1, make: 'toyota', model: 'corolla', registrationNumber: '111'},
    {id: 2, make: 'mazda', model: 'cx9', registrationNumber: '112'},
    {id: 3, make: 'nissan', model: 'xtrail', registrationNumber: '113'}            
  ]
} as {
  cars: Car[]
};

// Construct a schema, using GraphQL schema language
const schema  = buildSchema(`
  type Query {
    hello: String,
    getCars: [Car]    
  },
  type Mutation {
    saveCarDetails(make: String, model: String, registrationNumber: String): String
  },
  type Car {
    id: Int
    make: String
    model: String
    registrationNumber: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
  getCars: () => {
    return [...db.cars];
  },
  saveCarDetails: (data: {make: string; model: string; registrationNumber: string;}) => {
    console.log(`saving car details ${data.make}, ${data.model}, ${data.registrationNumber}`);
    console.log(data);
    db.cars.push({...data, id: ++curIndex});
  }
};


const app: express.Application = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

export default app;

export interface Car {
  id: number;
  make: string;
  model: string;
  registrationNumber: string;
}