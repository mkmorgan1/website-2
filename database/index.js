import mongoose from 'mongoose';
import { Project } from './schema.js';

try {
  mongoose.connect('mongodb://localhost/website_data', {useNewUrlParser: true, useUnifiedTopology: true});
} catch(error) {
  console.error(error);
}

/* DB CONNECTION */
export const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to Mongodb');
});

export const getAllProjects = (done) => {
  Project.find({}, (err, res) => {
    err ? done(err) : done(null, res);
  });
}

export const createNewProject = (data, done) => {
  Project.create(data, (err, res) => {
    err ? done(err) : done(null, res);
  });
}

export const updateOneProject = (id, data, done) => {
  Project.updateOne({_id: id}, data, (err, res) => {
    err ? done(err) : done(null, res)
  });
}
