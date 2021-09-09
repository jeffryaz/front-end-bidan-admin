import axios from "axios";

export function listDoctorPagination(params) {
  return axios.get(`/api/v1/dokter${params ? "?" + params : ""}`);
}
export function listAllPoli() {
  return axios.get(`/api/v1/poli`);
}
export function craeteDoctor(data) {
  return axios.post(`/api/v1/dokter`, data);
}
export function getDoctorById(id) {
  return axios.get(`/api/v1/dokter/${id}`);
}
export function editDoctorById(id, data) {
  return axios.post(`/api/v1/dokter/${id}`, data);
}
