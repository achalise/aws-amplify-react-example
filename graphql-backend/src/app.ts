import express, { Request, Response } from 'express';
import cors from 'cors';
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema  = buildSchema(`
  type Query {
    hello: String
  },
  type Mutation {
    saveCarDetails(make: String, model: String, registrationNumber: String): String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
  saveCarDetails: (data: {make: string; model: string; registrationNumber: string;}) => {
    console.log(`saving car details ${data.make}, ${data.model}, ${data.registrationNumber}`);
    console.log(data);
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