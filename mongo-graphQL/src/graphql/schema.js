const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    category: String!
    price: Float!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

input ProductInput {
  title: String!
  category: String!
  price: Float!
}

  type Mutation {
    createProduct(input: ProductInput!
    ): Product

    deleteProduct(id: ID!): Boolean

    updateProduct(
      id:ID!
      input: ProductInput 
    ): Product
  }
`;

module.exports = typeDefs;
