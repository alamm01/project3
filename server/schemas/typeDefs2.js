const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    cards: [Card]
  }

  type Card {
    _id: ID
    front: String
    back: String
    category: Category
  }

  type Category {
    _id: ID
    categoryName: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    cards(categoryName: String): [Card]
    card(_id: ID!): Card
    categories: [Category]
    category(categoryName: String!): Category
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCard(front: String!, back: String!, categoryId: ID!): Card
    addCategory(categoryName: String!): Category
    updateUserCards(cardId: ID!): User
    removeCard(cardId: ID!): Card
    removeCategory(categoryId: ID!): Category
  }
`;

module.exports = typeDefs;
