import axios from "axios";

export function listPatientPagination(params) {
  return axios.get(`/api/v1/pasien${params ? "?" + params : ""}`);
}
export function getDataPatient(id) {
  return axios.get(`/api/v1/pasien/${id}`);
}
export function getMedicalRecord(medical_id) {
  return axios.get(`/api/v1/medical/${medical_id}`);
}
export function listMedicinePagination(params) {
  return axios.get(`/api/v1/obat${params ? "?" + params : ""}`);
}
export function getMedicineById(id) {
  return axios.get(`/api/v1/obat/${id}`);
}
export function cancelMedicalRecord(id) {
  return axios.put(`/api/v1/medicalcancel/${id}`);
}
export function saveMedicalRecord(medical_id, data) {
  return axios.put(`/api/v1/medicalsave/${medical_id}`, data);
}
export function submitMedicalRecord(medical_id, data) {
  return axios.put(`/api/v1/medicalsubmit/${medical_id}`, data);
}
