import axios from "axios";

export function listDoctorPagination(params) {
  return axios.get(`/api/v1/dokter${params ? "?" + params : ""}`);
}
export function deleteDoctor(id) {
  return axios.delete(`/api/v1/dokter/${id}`);
}
export function listPoliPagination(params) {
  return axios.get(`/api/v1/poliall${params ? "?" + params : ""}`);
}
export function activePoli(id) {
  return axios.put(`/api/v1/poli/enable/${id}`);
}
export function inactivePoli(id) {
  return axios.put(`/api/v1/poli/disable/${id}`);
}
export function listAllPoli() {
  return axios.get(`/api/v1/poli`);
}
export function craeteDoctor(data) {
  return axios.post(`/api/v1/dokter`, data);
}
export function craetePoli(data) {
  return axios.post(`/api/v1/poli`, data);
}
export function getDoctorById(id) {
  return axios.get(`/api/v1/dokter/${id}`);
}
export function getPoliById(id) {
  return axios.get(`/api/v1/poli/${id}`);
}
export function editDoctorById(id, data) {
  return axios.post(`/api/v1/dokter/${id}`, data);
}
export function editPoliById(id, data) {
  return axios.put(`/api/v1/poli/${id}`, data);
}
export function listArticlePagination(params) {
  return axios.get(`/api/v1/article${params ? "?" + params : ""}`);
}
export function craeteArticle(data) {
  return axios.post(`/api/v1/article`, data);
}
export function editArticle(id, data) {
  return axios.post(`/api/v1/article/${id}`, data);
}
export function getArticleById(id) {
  return axios.get(`/api/v1/article/${id}`);
}
export function deleteArticleById(id) {
  return axios.delete(`/api/v1/article/${id}`);
}
export function listService(params) {
  return axios.get(`/api/v1/layanan${params ? "?" + params : ""}`);
}
export function getServiceById(id) {
  return axios.get(`/api/v1/layanan/${id}`);
}
export function createService(data) {
  return axios.post(`/api/v1/layanan`, data);
}
export function editService(id, data) {
  return axios.put(`/api/v1/layanan/${id}`, data);
}
export function listDailyInCome(params) {
  return axios.get(`/api/v1/report/dailyincome${params ? "?" + params : ""}`);
}
export function listHandOver() {
  return axios.get(`/api/v1/handover`);
}
export function processHandOver(id) {
  return axios.put(`/api/v1/handover/${id}`);
}
export function detailHandOver(id) {
  return axios.get(`/api/v1/handover/${id}`);
}
export function ListMedKindPagination() {
  return axios.get(`/api/v1/medicalkind`);
}
export function deleteMedKindById(id) {
  return axios.delete(`/api/v1/medicalkind/${id}`);
}
export function craeteMedicalKind(data) {
  return axios.post(`/api/v1/medicalkind`, data);
}
export function editMedicalKind(id, data) {
  return axios.put(`/api/v1/medicalkind/${id}`, data);
}
export function ListScreeningSettingPagination(params) {
  return axios.get(`/api/v1/formkind${params ? "?" + params : ""}`);
}
export function craeteScreeningSetting(data) {
  return axios.post(`/api/v1/formkind`, data);
}
export function editScreeningSetting(id, data) {
  return axios.put(`/api/v1/formkind/${id}`, data);
}
export function getScreeningSettingById(id) {
  return axios.get(`/api/v1/formkindid/${id}`);
}
export function createMedicalForm(data) {
  return axios.post(`/api/v1/medicalform`, data);
}
export function getMedicalFormById(id) {
  return axios.get(`/api/v1/medicalform/${id}`);
}
export function deleteMedicalFormById(id) {
  return axios.delete(`/api/v1/medicalform/${id}`);
}
export function getMedicalFormUnSelectById(id) {
  return axios.get(`/api/v1/formkind/unselect/${id}`);
}
export function ListStaffPagination(params) {
  return axios.get(`/api/v1/staff${params ? "?" + params : ""}`);
}
export function createStaff(id, data) {
  return axios.post(`/api/v1/staff/${id}`, data);
}
export function activeStaff(id) {
  return axios.put(`/api/v1/staff/ena/${id}`);
}
export function inActiveStaff(id) {
  return axios.put(`/api/v1/staff/dis/${id}`);
}
