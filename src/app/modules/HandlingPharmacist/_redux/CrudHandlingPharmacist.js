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
export function createMedicine(data) {
  return axios.post(`/api/v1/obat`, data);
}
export function editMedicine(id, data) {
  return axios.put(`/api/v1/obat/${id}`, data);
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
export function listMedicalRecordDone() {
  return axios.get(`/api/v1/medicaldone`);
}
export function listAllReservationDoctor() {
  return axios.get(`/api/v1/medicalallres`);
}
export function saveApotek(data) {
  return axios.post(`/api/v1/apotekcheck`, data);
}
export function createItemMedicine(data) {
  return axios.post(`/api/v1/obat-in`, data);
}
export function getListEmptyMedicine() {
  return axios.get(`/api/v1/getemptyitem`);
}
export function getListStockRunningOut() {
  return axios.get(`/api/v1/getwarnitem`);
}
export function getListPreOrder() {
  return axios.get(`/api/v1/getpreorder`);
}
export function getListStockName() {
  return axios.get(`/api/v1/stockitem`);
}
export function listAllPatient() {
  return axios.get(`/api/v1/pasien?page=1&rowsPerPage=100000`);
}
export function addDrugNonDoctor(data) {
  return axios.post(`/api/v1/reseppos`, data);
}
export function getPoDrug(id) {
  return axios.put(`/api/v1/takemissitem/${id}`);
}
