export const updateDb = (data, project) => {
  let query;
  if (project) {
    query = JSON.stringify({
      query: `mutation {
        updateProject(
          id: "${data.id}",
          input: {
            name: "${data.name}",
            github: "${data.github}",
            deployedUrl: "${data.deployedUrl}",
            description: "${data.description}",
            frontEnd: "${data.frontEnd}",
            backEnd: "${data.backEnd}",
            media: "${data.media}",
          }
        )
      }`
    });
  } else {
    query = JSON.stringify({
      query: `mutation {
        updateBio(
          id: "${data.id}",
          input: {
            bio: "${data.bio}",
          }
        )
      }`
    });
  }

  fetch('/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: query,
  })
    .then((data) => data.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

