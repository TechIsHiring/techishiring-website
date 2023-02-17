import api from "lib/api/config/api";
import { BASEURL } from "../constants";

interface InternalSubscriberPostBody {
  email: string;
}

export const RouteToInternalRevueApi = (
  requestBody: InternalSubscriberPostBody
) => {
  return api
    .post(`${BASEURL}/api/revue-subscriber`, requestBody)
    .then((response) => response.data);
};
