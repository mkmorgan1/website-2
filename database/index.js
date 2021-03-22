import mongoose from 'mongoose';
import { Project, Bio} from './schema.js';

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

/* BIO FUNCTIONS */
export const bio = {
  create: (info, done) => {
    Bio.create(info, (err, res) => {
      err ? done(err): done(null, res);
    })
  },
  get: (done) => {
    Bio.find({}, (err, res) => {
      err ? done(err) : done(null, res);
    });
  },
  update: (id, data, done) => {
    Bio.updateOne({_id: id}, data, (err, res) => {
      err ? done(err) : done(null, res);
    })
  }
}

export const project = {
  create: (data, done) => {
    Project.create(data, (err, res) => {
      err ? done(err) : done(null, res);
    });
  },
  get: (done) => {
    Project.find({}, (err, res) => {
      err ? done(err) : done(null, res);
    });
  },
  update: (id, data, done) => {
    Project.updateOne({_id: id}, data, (err, res) => {
      err ? done(err) : done(null, res)
    });
  }
}
