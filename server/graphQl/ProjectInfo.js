class ProjectInfo {
  constructor({ _id, name, github, deployedUrl, description, media, frontEnd, backEnd }) {
    this.id = _id
    this.name = name || null;
    this.github = github || null;
    this.deployedUrl = deployedUrl || null;
    this.description = description || null;
    this.frontEnd = frontEnd || null;
    this.backEnd =  backEnd || null;
    this.media = media || null;
  }
}

export default ProjectInfo;
