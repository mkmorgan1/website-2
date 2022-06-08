/* SERVER */
import express from 'express';
import https from 'https';
const app = express();
const PORT = 80;

/* PACKAGES */
import path from 'path';
import fs from 'fs';

/* FUNCTIONS */
import { project, bio } from './../database/index.js'

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
app.use('/', express.static(path.join(__dirname, './../../social_links_tree/public')))
app.use('/portfolio', express.static(path.join(__dirname, '../public')))
app.use('/time-travel-agent', express.static(path.join(__dirname, './../../time-travel-agent/public')))

/* FOR POSTMAN */
app.get('/test', (err, res) => {
  project.get((err, result) => {
    err ? res.status(404).send(err) : res.status(200).send(result);
  })
})

app.listen(PORT , () => {
  console.log(`listening on port: ${PORT}
  Running a GraphQL API server at .../graphql`);
});


/*
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/matthewkerrymorgan.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/matthewkerrymorgan.com/fullchain.pem'),
};

https.createServer(options, app).listen(443, () => console.log('HTTPS Server running on port 443'));
*/