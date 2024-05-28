const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type StolenCar {
    id: ID!
    number: String!
    brand: String!
    status: String!
    owner_last_name: String!
  }

  type Query {
    getCar(id: ID!): StolenCar
    getCars: [StolenCar]
  }

  type Mutation {
    createCar(number: String!, brand: String!, status: String!, owner_last_name: String!): StolenCar
    updateCar(id: ID!, number: String, brand: String, status: String, owner_last_name: String): StolenCar
    deleteCar(id: ID!): StolenCar
  }
`);
