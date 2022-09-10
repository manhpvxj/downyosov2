import axios from "axios";
const axiosImgur = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? "https://api.imgur.com/3" : process.env.REACT_APP_IMGUR,
  headers: {
    "content-type": "multipart/form-data",
    "accept": "*/*",
    Authorization: `CLIEND-ID  ${process.env.REACT_APP_CLIENTID}`,
    "Access-Control-Allow-Origin": "*",
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