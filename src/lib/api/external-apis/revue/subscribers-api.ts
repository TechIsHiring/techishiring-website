import api from "lib/api/config/api";
import { REVUEBASEURL, RevueAuthHeader } from "./constants";

interface SubscriberPostBody {
  email: string;
  double_opt_in?: boolean;
}

export const addNewSubscriber = (requestBody: SubscriberPostBody) => {
  return api
    .post(`${REVUEBASEURL}/v2/subscribers`, requestBody, RevueAuthHeader)
    .then((response) => response.data);
};
