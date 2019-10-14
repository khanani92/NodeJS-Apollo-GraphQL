import { gql } from 'apollo-server-express';


export const Book = gql`
 type Book {
   title: String!
   author: String!
 }
`;  

export const typeResolvers = {

};