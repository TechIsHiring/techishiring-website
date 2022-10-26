import api from "lib/api/config/api";
import { REVUEBASEURL } from "./base-url";

export const fetchIssues = () => {
  return api.get(
    `${REVUEBASEURL}/v2/issues`,
    { headers: {
      "Authorization": `Token ${process.env.NEXT_PUBLIC_REVUE_KEY}` 
    }}).then(response => response.data);
};