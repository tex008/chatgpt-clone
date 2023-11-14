import axios from "axios";

const URL_API = "http://localhost:5555/api/completion";

export const sendRequest = async (message) => {
  const response = await axios.post(URL_API, message);

  return response.data;
};
