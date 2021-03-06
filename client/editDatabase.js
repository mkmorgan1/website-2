/* FETCHING */
const fetchRequest = (query, callback) => {
  fetch("/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: query,
  })
    .then((data) => data.json())
    .then((data) => {
      if (callback) callback();
      console.log(data);
    })
    .catch((err) => console.error(err));
};

/* UPDATE BIO */
export const updateBio = (data) => {
  const query = JSON.stringify({
    query: `mutation {
      updateBio(
        id: "${data.id}",
        input: {
          bio: "${data.bio}",
        }
      )
    }`,
  });
  fetchRequest(query);
};

/* UPDATE PROJECT */
export const updateProject = (data) => {
  const query = JSON.stringify({
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
      }`,
  });
  fetchRequest(query);
};

/* CREATE PROJECT */
export const createProject = (data, callback) => {
  const query = JSON.stringify({
    query: `mutation {
        createProject ( input: {
          name: "${data.name}",
          github: "${data.github}",
          deployedUrl: "${data.deployedUrl}",
          description: "${data.description}",
          frontEnd: "${data.frontEnd}",
          backEnd: "${data.backEnd}",
          media: "${data.media}",
        }) {
          id
        }
      }`,
  });
  fetchRequest(query, callback);
};

/* DELETE PROJECT */
export const deleteProject = (id, callback) => {
  const query = JSON.stringify({
    query: `mutation {
      deleteProject (
        id: "${id}"
      )
    }`,
  });
  fetchRequest(query, callback);
};
