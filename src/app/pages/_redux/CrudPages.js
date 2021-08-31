import axios from "axios";

export function getDataChartDashboardRegistry() {
  return axios.get(`/api/v1/regdashboard`);
}

export function getDataQueueRegistry() {
  return axios.get(`/api/v1/screen`);
}
