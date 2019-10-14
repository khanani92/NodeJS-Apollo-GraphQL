import { gql } from 'apollo-server-express';

export const Query = gql`
 extend type Query {
   books: [Book]
 }
`;

export const queryResolvers = {
 Query: {
   books: () => ([
     {
       title: "Harry Potter and the Sorcerer's stone",
       author: 'J.K. Rowling',
     },
     {
       title: 'Jurassic Park',
       author: 'Michael Crichton',
     },
   ])
 }
};