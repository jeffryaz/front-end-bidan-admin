import axios from "axios";

export function getDataChartDashboardRegistry() {
  return axios.get(`/api/v1/regdashboard`);
}

export function getDataQueueRegistry() {
  return axios.get(`/api/v1/screen`);
}

export function getDataApotek() {
  return axios.get(`/api/v1/listapotek`);
}

export function getDataChartDashboardDoctor() {
  return axios.get(`/api/v1/dokdashboard`);
}

export function setDataProcessDoctor(antrian_id) {
  return axios.get(`/api/v1/dokgetscreening/${antrian_id}`);
}

export function getDataTeller() {
  return axios.get(`/api/v1/paymentlist`);
}
