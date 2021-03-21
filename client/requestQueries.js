export const project = {
  get: `query {
    getProjects {
      id
      name
      github
      deployedUrl
      description
      frontEnd
      backEnd
      media
    }
  }`,

}

export const bio = {
  get: `query {
    getBio {
      id
      bio
    }
  }`,

}