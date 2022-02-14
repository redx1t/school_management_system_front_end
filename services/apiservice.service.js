// fetch classrooms

import axios from "axios";
import * as BackendConstants from "../constants/backend";
axios.defaults.baseURL = BackendConstants.BACKEND_SERVER_URL;
const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
const fetchClassrooms = () => {
  return axios.get(BackendConstants.ALL_CLASSROOMS, config).then(
    (res) => {
      if (res.data.classrooms) {
        return res.data.classrooms;
      }
      return null;
      // console.log(res, res.data.data.user)
    },
    (err) => {
      console.log(err);
      return null;
    }
  );
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post("signout").then((response) => {
    return response.data;
  });
};
const ApiService = [fetchClassrooms, logout];
export default ApiService;
