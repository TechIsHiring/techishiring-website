import api from "../../config/api";
import { BASEURL } from "../constants";

export const sendEmail = async (email: Email): Promise<any> => {
  const response = await api.post(`${BASEURL}/api/process-email`, email);
  const data = response.json();
  return data;
};