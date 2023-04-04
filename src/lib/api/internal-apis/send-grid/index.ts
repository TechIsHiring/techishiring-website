import api from "../../config/api";
import { BASEURL } from "../constants";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const sendEmail = async (email: Email): Promise<any> => {
  const requestBody = JSON.stringify(email);
  const response = await api.post(`${BASEURL}/api/process-email`, requestBody, CONFIG);
  const data = response.json();
  return data;
};