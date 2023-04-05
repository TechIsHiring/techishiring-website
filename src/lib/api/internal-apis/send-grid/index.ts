import api from "../../config/api";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const sendEmail = async (email: Email): Promise<any> => {
  const requestBody = JSON.stringify(email);
  const response = await api.post("/api/process-email", requestBody, CONFIG);
  const data = response.json();
  return data;
};