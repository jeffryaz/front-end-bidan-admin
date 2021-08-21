import axios from "axios";

export function listPatientPagination(params) {
  return axios.get(`/api/v1/pasien${params ? "?" + params : ""}`);
}
export function getDataPatient(id) {
  return axios.get(`/api/v1/pasien/${id}`);
}
export function updateDataPatient(id, data) {
  return axios.post(`/api/v1/registrasi/${id}`, data);
}
