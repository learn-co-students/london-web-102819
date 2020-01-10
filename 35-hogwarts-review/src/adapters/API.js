const ENDPOINT = "http://localhost:3000/";
const HOGS_URL = `${ENDPOINT}hogs`;

const getHogs = () => fetch(HOGS_URL).then(res => res.json());
const patchHog = hog =>
  fetch(`${HOGS_URL}/${hog.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(hog)
  }).then(res => res.json());

export default {
  getHogs,
  patchHog
};
