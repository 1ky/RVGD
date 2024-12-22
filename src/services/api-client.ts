import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9536f1a8de6a4435af906028c1ab0830",
  },
});
