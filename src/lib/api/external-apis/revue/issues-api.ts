import api from "lib/api/config/api";
import { REVUEBASEURL, RevueAuthHeader } from "./constants";

export const fetchIssues = (): Promise<Issues[]> => {
  return api
    .get(`${REVUEBASEURL}/v2/issues`, RevueAuthHeader)
    .then((response) => response.json());
};
