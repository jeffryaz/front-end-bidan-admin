import axios from "axios";

export function listDoctorPagination(params) {
  return axios.get(`/api/v1/dokter${params ? "?" + params : ""}`);
}
export function listPoliPagination(params) {
  return axios.get(`/api/v1/poli${params ? "?" + params : ""}`);
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
