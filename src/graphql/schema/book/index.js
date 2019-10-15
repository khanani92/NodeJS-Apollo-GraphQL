import { Book, typeResolvers } from './_type';
 import { Query, queryResolvers } from './_query';
// //import inputTypes from './_input';
 import { mutationTypes, mutationResolvers } from './_mutation';


const BookSchema = {
    type: Book,
    typeResolvers,
    query:Query,
    queryResolvers,
    mutationTypes,
    mutationResolvers      
}

export default BookSchema;

