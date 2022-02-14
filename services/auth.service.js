import axios from "axios";
import * as BackendConstants from "./../constants/backend";
axios.defaults.baseURL = BackendConstants.BACKEND_SERVER_URL;
const login = (username, password) => {
  const params = new URLSearchParams();
  params.append("username", username);
  params.append("password", password);

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return axios
    .post("login", params, config)
    .then((res) => {
      if (res.data.access_token) {
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);

        const config = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        };
        // console.log(config);
        // console.log(localStorage.getItem('access_token'))
        axios.get("v1/users/user/get", config).then(
          (res) => {
            console.log(res.data.data.user);
            localStorage.setItem("user", res.data.data.user);
            return true;
            // console.log(res, res.data.data.user)
          },
          (err) => {
            console.log(err);
            return false;
          }
        );
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const logout = () => {
  localStorage.removeItem("user");
  return axios.post("signout").then((response) => {
    return response.data;
  });
};
const AuthService = {
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
