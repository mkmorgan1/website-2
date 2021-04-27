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
  input BioInput {
    bio: [String]
  }
  type Bio {
    id: ID!
    bio: [String]
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
    getBio: Bio
    getProjects: [Project]
  }
  type Mutation {
    createBio(input: BioInput): Bio
    updateBio(id: ID!, input: BioInput): String
    createProject(input: ProjectInput): Project
    updateProject(id: ID!, input: ProjectInput): String
    deleteProject(id: ID!): String
  }
`);

export default schema;