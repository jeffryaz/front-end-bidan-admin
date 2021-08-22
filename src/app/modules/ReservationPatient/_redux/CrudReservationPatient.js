import axios from "axios";

export function listReservationOffline() {
  return axios.get(`/api/v1/reservasioff`);
}
export function listReservationOnline() {
  return axios.get(`/api/v1/reservasion`);
}
