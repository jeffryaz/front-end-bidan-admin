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
export function RegisDataPatientOffline(data) {
  return axios.post(`/api/v1/registrasi`, data);
}
export function listProvince() {
  return axios.get(`/tools/provinsi`);
}
export function listCity(prov) {
  return axios.get(`/tools/city/${prov}`);
}
export function listDistricts(prov, city) {
  return axios.get(`/tools/kec/${prov}/${city}`);
}
export function listWard(prov, city, districts) {
  return axios.get(`/tools/desa/${prov}/${city}/${districts}`);
}
export function getCetakKartu(id) {
  return axios.get(`/api/v1/cetakkartu/${id}`);
}
export function listMedicalRecord(patient_id) {
  return axios.get(`/api/v1/pasien/medhist/${patient_id}`);
}
export function getMedicalRecord(medical_id) {
  return axios.get(`/api/v1/medical/${medical_id}`);
}
