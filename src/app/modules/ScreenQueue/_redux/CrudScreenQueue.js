import axios from "axios";

export function getDataQueueRegistry() {
  return axios.get(`/api/v1/screen`);
}
