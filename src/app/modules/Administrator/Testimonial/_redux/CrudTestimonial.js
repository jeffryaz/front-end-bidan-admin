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
export function getScreeningData(id) {
  return axios.get(`/api/v1/screeningform/${id}`);
}
export function regisScreeningData(data) {
  return axios.post(`/api/v1/submitscreen`, data);
}
export function listNotYetCome() {
  return axios.get(`/api/v1/reservasiuncoming`);
}
export function listScreening() {
  return axios.get(`/api/v1/reservasitoday`);
}
export function getReservationById(id) {
  return axios.get(`/api/v1/reservation/${id}`);
}
export function getLabsById(medical_id) {
  return axios.get(`/api/v1/labs/${medical_id}`);
}
export function updateLabsById(medical_id, data) {
  return axios.put(`/api/v1/labs/${medical_id}`, data);
}
export function regisLabs(data) {
  return axios.post(`/api/v1/labs`, data);
}
export function typeScreening(id) {
  return axios.get(`/api/v1/formkind/${id}`);
}
export function testimonialByStaf(data) {
  return axios.post(`/api/v1/testimoni/staff`, data);
}
export function getListTestimonialPagination(params) {
  return axios.get(`/api/v1/testimoni${params ? "?" + params : ""}`);
}
export function publishTestimonial(id) {
  return axios.put(`/api/v1/testimoni/publish/${id}`);
}
export function unPublishTestimonial(id) {
  return axios.put(`/api/v1/testimoni/unpublish/${id}`);
}
export function deleteTestimonial(id) {
  return axios.delete(`/api/v1/testimoni/staff/${id}`);
}
