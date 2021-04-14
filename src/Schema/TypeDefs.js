const { gql } = require("apollo-server-express");

const typeDefs = gql `
  type Dessert {
    dessert: String!
    nutritionInfo: nutritionInfo!
  }

  type DeleteResponse {
    isSuccess: Boolean
  }

  input DessertInput {
    dessert: String!
    nutritionInfo: nutritionInfoInput!
  }

  input nutritionInfoInput {
    calories: Int!
    fat: Int!
    protein: Int!
    carbs: Int!
  }

  type nutritionInfo {
    calories: Int!
    fat: Int!
    protein: Int!
    carbs: Int!
  }

  type Query {
    getDesserts: [Dessert!]!
  }

  type Mutation {
    createDessert( DessertInfo: DessertInput): [Dessert!]!
    deleteDessert( DessertNames: [String]): [Dessert!]!
    resetData: [Dessert!]!
  }
`;

module.exports = { typeDefs };
