// fetch classrooms

import axios from "axios";
import * as BackendConstants from "./../constants/backend";
axios.defaults.baseURL = BackendConstants.BACKEND_SERVER_URL;
const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
const fetchClassrooms = () => {
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
    return ();
}
 
export default fetchClassrooms;