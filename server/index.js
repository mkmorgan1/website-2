import express from 'express';
const app = express();
const PORT = 8080;
import path from 'path';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

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
})