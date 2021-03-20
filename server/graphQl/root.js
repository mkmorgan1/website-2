import { ProjectInfo, Bio } from './ProjectInfo.js';
import { bio, project } from '../../database/index.js'

const root = {
  /* BIO */
  createBio: async ({input}) => {
    return await new Promise((resolve, reject) => {
      bio.create(input, (err, result) => {
        err ? reject(err): resolve(result)
      })
    })
      .then(data => new Bio(data))
      .catch(err => err);
  },
  getBio: async () => {
    return await new Promise((resolve, reject) => {
      bio.get((err, result) => {
        err ? reject(err) : resolve(result)
      });
    })
    .then(data => new Bio(data[0]))
    .catch(err => err);
  },
  /* PROJECTS */
  getProjects: async () => {
    return await new Promise((resolve, reject) => {
      project.get((err, result) => {
        err ? reject(err) : resolve(result);
      })
    }).then(data => {
      return data.map(item => {
        return new ProjectInfo(item);
      })
    }).catch(err => err);
  },
  createProject: async ({input}) => {
    return await new Promise((resolve, reject) => {
      project.get(input, (err, result) => {
        err ? reject(err) : resolve(result);
      })
    })
      .then((data) => new ProjectInfo(data))
      .catch(err => err);
  },
  updateProject: async({id, input}) => {
    return new Promise((resolve, reject) => {
      project.update(id, input, (err, result) => {
        err ? reject(err) : resolve(result);
      })
    })
      .then(() => "Successful Update")
      .catch(() => 'Failed to Update');
  }
};

export default root;