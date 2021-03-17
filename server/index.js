import express from 'express';
const app = express();
const PORT = 8080;
import path from 'path';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

import {createNewProject} from '../database/index.js'

/* SETTING UP  */
const schema = buildSchema(`
  type Query {
    getName(name: String): String
  }
`);

var root = {
  getName: ({name}) => {
    return name
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));


app.listen(PORT , () => {
  console.log(`listening on port: ${PORT}
Running a GraphQL API server at http://localhost:${PORT}/graphql`);
});


// var name = "matt"
// var query = `query getName($name: String) {
//   getName(name: $name)
// }`
// fetch('/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
//   body: JSON.stringify({
//     query,
//     variables: {
//       name: name,
//     }
//   })
// })
//   .then(r => r.json())
//   .then(data => console.log('data returned:', data));