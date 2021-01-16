import config from "./config";

const id = config.space_id;
const token = config.token_delivery;

export const contentful = (query) => {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${id}/`;

  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      }
      return data;
    });
};
