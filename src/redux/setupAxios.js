export default function setupAxios(axios, store) {
  axios.defaults.baseURL = "https://ws.ayaklinik.id";
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
}
