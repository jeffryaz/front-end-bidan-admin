import { MODAL } from "../service/modalSession/ModalService";

export function hostBase() {
  if (process.env.NODE_ENV === "development") {
    return "https://wst.ayaklinik.id";
  } else {
    return "https://ws.ayaklinik.id";
  }
}

export default function setupAxios(axios, store) {
  axios.defaults.baseURL = hostBase();
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.interceptors.request.use(
    (config) => {
      const {
        auth: { authToken },
      } = store.getState();

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );
  axios.interceptors.response.use(
    function (response) {
      // console.log("respons:", response );
      return response;
    },
    function (error) {
      console.log(error?.response);
      if (
        error.response?.status === 401 &&
        error.response?.data.messages === "Unauthorized."
      ) {
        var title = "";
        var message = "";
        var button = "";
        if (
          localStorage.getItem("i18nConfig") &&
          JSON.parse(localStorage.getItem("i18nConfig")).selectedLang === "id"
        ) {
          title = "Sesi Masuk";
          message = "Waktu sesi Anda sudah berakhir. Silakan masuk lagi !!";
          button = "Keluar";
        } else {
          title = "Session Log In";
          message = "Your session time is over. Please sign in again !!";
          button = "Sign Out";
        }
        MODAL.showSession(title, message, button);
      }
      console.log(
        "Error interceptors.response => ",
        JSON.parse(JSON.stringify(error))
      );
      return Promise.reject(error);
    }
  );
}
