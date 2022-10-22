import api from "../../api";

export const fetchExampleRequest = () => {
  return api.get("https://restcountries.com/v2/all").then(res => res.data);
};