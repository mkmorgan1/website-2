import { urlencoded } from 'express';
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: String,
  github: String,
  deployedUrl: String,
  description: String,
  frontEnd: String,
  backEnd: String,
  media: String,
});

export const Project = mongoose.model('projects', ProjectSchema);