import { useState, useMemo } from "react";
import { IDLE, defaultStatuses } from "../config/constants/api-status";
import capitalize from "lib/utils/capitalize";

const prepareStatuses = (currentStatus: string) => {
  const statuses: { [key: string]: boolean } = {};

  for (const status of defaultStatuses) {
    const normalizedStatus = capitalize(status.toLowerCase());
    const normalizedStatusKey = `is${normalizedStatus}`;
    statuses[normalizedStatusKey] = status === currentStatus;
  }

  return statuses;
};

export const useApiStatus = (currentStatus = IDLE) => {
  const [apiStatus, setApiStatus] = useState(currentStatus);
  const statuses = useMemo(() => prepareStatuses(apiStatus), [apiStatus]);

  return {
    apiStatus,
    setApiStatus,
    statuses
  };
};
