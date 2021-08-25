import axios from "axios";

export function listReservationOffline() {
  return axios.get(`/api/v1/reservasioff`);
}
export function listReservationOnline() {
  return axios.get(`/api/v1/reservasion`);
}
export function listAllPatient() {
  return axios.get(`/api/v1/pasien?page=1&rowsPerPage=100000`);
}
export function listAllPoli() {
  return axios.get(`/api/v1/poli`);
}
export function getPatientById(id) {
  return axios.get(`/api/v1/pasien/${id}`);
}
export function regisReservation(data) {
  return axios.post(`/api/v1/reservasioff`, data);
}
export function listPatientPagination(params) {
  return axios.get(`/api/v1/pasien${params ? "?" + params : ""}`);
}
export function listReservationPagination(params) {
  return axios.get(`/api/v1/reservasiall${params ? "?" + params : ""}`);
}
export function cancelReservation(id, data) {
  return axios.put(`/api/v1/cancelreservasi/${id}`, data);
}
