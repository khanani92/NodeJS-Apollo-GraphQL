import { gql } from 'apollo-server-express';

export const mutationTypes = gql`
extend type Mutation {
    createBook(id: Int, title: String, author: String): Book
}
`;



export const mutationResolvers = {
    Mutation:{
        createBook: (parent,data) => {
            return data;
        }
    }
};