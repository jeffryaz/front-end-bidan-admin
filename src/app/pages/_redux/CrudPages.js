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
export function getDataChartDashboardPharmacist() {
  return axios.get(`/api/v1/apotekdashboard`);
}
export function currentHandOver() {
  return axios.get(`/api/v1/currenthandover`);
}
export function getDataDashboard() {
  return axios.get(`/api/v1/admdashboard`);
}
export function getDataDownload() {
  return axios.get(`/api/v1/handoverdetail`);
}
export function goBackPoli(resep_id) {
  return axios.put(`/api/v1/backtopoli/${resep_id}`);
}
