import paintings from "./paintings";

const API_URL = "3000";
const PAINTINGS_URL = `${API_URL}/paintings`;

// const getPaintings = () => fetch(PAINTINGS_URL).then(res => res.json());
const getPaintings = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(paintings);
    }, 1000);
  });

export default {
  getPaintings
};
