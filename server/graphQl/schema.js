import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Project {
    id: ID!
    name: String
    github: String
    deployedUrl: String
    description: String
    frontEnd: String
    backEnd: String
    media: String
  }
  input ProjectInput {
    name: String
    github: String
    deployedUrl: String
    description: String
    frontEnd: String
    backEnd: String
    media: String
  }
  type Query {
    getProjects: [Project]
  }
  type Mutation {
    createProject(input: ProjectInput): Project
    updateProject(id: ID!, input: ProjectInput): String
  }
`);

export default schema;