import { urlencoded } from 'express';
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: String,
  github: String,
  deployedUrl: String,
  description: String,
  media: String,
});

export const Project = mongoose.model('login', ProjectSchema);