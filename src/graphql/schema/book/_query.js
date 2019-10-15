import { gql } from 'apollo-server-express';

let data = [
  {
    id:0,
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    id:1,
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
]


export const Query = gql`
 extend type Query {
   books: [Book],
   book(id: Int): Book
 }
`;

export const queryResolvers = {
 Query: {
   books: () => (data),
   book: (root, {id}) => 
   {
    return data.filter(character => {
      return (character.id = id)
    })[0]    
   }
 }
};