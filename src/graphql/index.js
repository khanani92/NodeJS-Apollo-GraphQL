
const { ApolloServer, gql } = require('apollo-server-express');
import config from '../config';
import schema from './schema';

// const server = new ApolloServer({ typeDefs, resolvers,
//   playground:{
//     endpoint:'http://localhost:5000/graphql',
//     settings:{
//       'editor.theme':'light'
//     }
//   }
//  });



// export default (app) => {

  

//   server.applyMiddleware({ app });

//   // schema.applyMiddleware({
//   //   app
//   // });
// };

export default schema;