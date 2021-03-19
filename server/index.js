import express from 'express';
const app = express();
const PORT = 8080;
import path from 'path';

/* GRAPHQL DATA */
import schema from './graphQl/schema.js';
import root from './graphQl/root.js';
import { graphqlHTTP } from 'express-graphql';

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

/* FOR POSTMAN */
app.get('/test', (err, res) => {
  getAllProjects((err, result) => {
    err ? res.status(404).send(err) : res.status(200).send(result);
  })
})

app.listen(PORT , () => {
  console.log(`listening on port: ${PORT}
Running a GraphQL API server at http://localhost:${PORT}/graphql`);
});