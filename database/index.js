import mongoose from 'mongoose';
import { Project } from './schema.js';

try {
  mongoose.connect('mongodb://localhost/profiles', {useNewUrlParser: true, useUnifiedTopology: true});
} catch(error) {
  console.error(error);
}

/* DB CONNECTION */
export const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to Mongodb');
});

export const createNewProject = (data, done) => {
  Project.create(data, (err, res) => {
    err ? done(err) : done(null, res);
  });
}