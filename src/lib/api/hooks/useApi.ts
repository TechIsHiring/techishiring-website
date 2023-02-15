import { useState } from "react";
import { useApiStatus } from "./useApiStatus";
import { PENDING, SUCCESS, ERROR } from "../config/constants/api-status";
import { AxiosResponse } from "axios";

export default function useApi(
  apiFunction: (...args: any) => Promise<AxiosResponse<any, any>>,
  initialData = {}
) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();
  const { statuses, setApiStatus, apiStatus } = useApiStatus();

  const executeApiCall = async (...args: any) => {
    try {
      setApiStatus(PENDING);
      const data = await apiFunction(...args);
      setData(data);
      setApiStatus(SUCCESS);
      return {
        data,
        error: null
      };
    } catch (error: any) {
      setError(error);
      setApiStatus(ERROR);
      return {
        error,
        data: null
      };
    }
  };

  return {
    data,
    setData,
    apiStatus,
    setApiStatus,
    error,
    executeApiCall,
    statuses
  };
}
