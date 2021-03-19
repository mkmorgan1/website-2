import ProjectInfo from './ProjectInfo.js';
import {createNewProject, getAllProjects, updateOneProject} from '../../database/index.js'

const root = {
  getProjects: async () => {
    return await new Promise((resolve, reject) => {
      getAllProjects((err, result) => {
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
      createNewProject(input, (err, result) => {
        err ? reject(err) : resolve(result);
      })
    })
      .then((data) => new ProjectInfo(data))
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

export default root;