const API_ENDPOINT = "http://localhost:3000";
const POEMS_URL = `${API_ENDPOINT}/poems`;

const getPoems = () => fetch(POEMS_URL).then(res => res.json());
const postPoem = newPoem =>
  fetch(POEMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPoem)
  }).then(res => res.json());
const deletePoem = poem =>
  fetch(`${POEMS_URL}/${poem.id}`, {
    method: "DELETE"
  }).then(res => res.json());

export default {
  getPoems,
  postPoem,
  deletePoem
};
