import { gql } from 'apollo-server-express';


export const Book = gql`
 type Book {
   id: Int
   title: String!
   author: String!
 }
`;  

export const typeResolvers = {

};