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
      console.log(res.data.access_token);
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
        axios.get(BackendConstants.GET_USER, config).then(
          (res) => {
            console.log(res.data.data.user);
            localStorage.setItem("user", res.data.data.user);
            //console.log("her");
            return true;
            // console.log(res, res.data.data.user)
          },
          (err) => {
            console.log(err);
            return false;
          }
        );
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  login,
  getCurrentUser,
};

export default AuthService;
