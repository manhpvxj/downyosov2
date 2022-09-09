import axios from "axios";
const axiosImgur = axios.create({
  baseURL: process.env.REACT_APP_IMGUR,
  headers: {
    "content-type": "multipart/form-data",
    Authorization: process.env.REACT_APP_CLIENTID,
  },
});

axiosImgur.interceptors.request.use(async (config) => {
  return config;
});
axiosImgur.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
export default axiosImgur;