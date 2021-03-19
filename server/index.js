import express from 'express';
const app = express();
const PORT = 8080;
import path from 'path';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

import {createNewProject, getAllProjects, updateOneProject} from '../database/index.js'

const schema = buildSchema(`
  type Message {
    id: ID!
    name: String
    github: String
    deployedUrl: String
    description: String
    frontEnd: String
    backEnd: String
    media: String
  }
  input MessageInput {
    name: String
    github: String
    deployedUrl: String
    description: String
    frontEnd: String
    backEnd: String
    media: String
  }
  type Query {
    getProjects: [Message]
  }
  type Mutation {
    createProject(input: MessageInput): Message
    updateProject(id: ID!, input: MessageInput): String
  }
`);

class ProfileInfo {
  constructor({ _id, name, github, deployedUrl, description, media, frontEnd, backEnd }) {
    this.id = _id
    this.name = name || null;
    this.github = github || null;
    this.deployedUrl = deployedUrl || null;
    this.description = description || null;
    this.frontEnd = frontEnd || null;
    this.backEnd =  backEnd || null;
    this.media = media || null;
  }
}

var root = {
  getProjects: async () => {
    return await new Promise((resolve, reject) => {
      getAllProjects((err, result) => {
        err ? reject(err) : resolve(result);
      })
    }).then(data => {
      return data.map(item => {
        return new ProfileInfo(item);
      })
    }).catch(err => err);
  },
  createProject: async ({input}) => {
    return await new Promise((resolve, reject) => {
      createNewProject(input, (err, result) => {
        err ? reject(err) : resolve(result);
      })
    })
      .then((data) => new ProfileInfo(data))
      .catch(err => err);
  },
  updateProject: async({id, input}) => {
    return new Promise((resolve, reject) => {
      updateOneProject(id, input, (err, result) => {
        err ? reject(err) : resolve(result);
      })
    })
      .then(() => "Successful Update")
      .catch(() => 'Failed to Update');
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/test', (err, res) => {
  getAllProjects((err, result) => {
    err ? res.status(404).send(err) : res.status(200).send(result);
  })
})

app.listen(PORT , () => {
  console.log(`listening on port: ${PORT}
Running a GraphQL API server at http://localhost:${PORT}/graphql`);
});