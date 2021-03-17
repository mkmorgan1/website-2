import express from 'express';
const app = express();
const PORT = 8080;
import path from 'path';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

import {createNewProject, getAllProjects} from '../database/index.js'

/* SETTING UP  */
// const schema = buildSchema(`
//   type Query {
//     getName(name: String): String
//   }
// `);

const schema = buildSchema(`
  type Message {
    name: String
    github: String
    deployedUrl: String
    description: String
    media: String
  }
  input MessageInput {
    name: String
    github: String
    deployedUrl: String
    description: String
    media: String
  }
  type Query {
    getProjects: Message
  }
  type Mutation {
    createProject(input: MessageInput): Message
  }

`);
  // type Mutation {
  //   creatProject(input:MessageInput) : Message
  // }
class ProfileInfo {
  constructor({name, github, deployedUrl, description, media}) {
    this.name = name || null;
    this.github = github || null;
    this.deployedUrl = deployedUrl || null;
    this.description = description || null;
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
  createProject: async ({name, github, deployedUrl, description, media}) => {
    const inputData = {
      name: name,
      github: github,
      deployedUrl: deployedUrl,
      description: description,
      media: media
    }
    return await new Promise((resolve, reject) => {
      createNewProject(inputData, (err, result) => {
        err ? reject(err) : resolve(result);
      })
    }).then(() => {
      return new ProfileInfo(inputData);
    }).catch(err => err);
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
  const getProjects = async () => {
    return new Promise((resolve, reject) => {
      getAllProjects((err, result) => {
        err ? reject(err) : resolve(result);
      })
    }).then(data => res.send(data)).catch(err => res.send(err));
  }
  getProjects();
})

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