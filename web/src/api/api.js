import axios from "axios";

const URL_API = "http://localhost:5555/send-text";

export const sendRequest = async (message) => {
  const { data } = axios.post(URL_API, message);

  return data;
};
