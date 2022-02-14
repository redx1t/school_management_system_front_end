// fetch classrooms

import axios from "axios";
import * as BackendConstants from "../constants/backend";
axios.defaults.baseURL = BackendConstants.BACKEND_SERVER_URL;
const fetchClassrooms = () => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  return axios.get(BackendConstants.ALL_CLASSROOMS, config).then(
    (res) => {
      console.log(res);
      if (res.data.data.classrooms) {
        return res.data.data.classrooms;
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

const fetchOneClass = (id) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  //console.log(localStorage.getItem("access_token"));
  //console.log(axios.get(BackendConstants.SPECIFIC_CLASSROOM, params, config));
  return axios.get(BackendConstants.SPECIFIC_CLASSROOM + "/" + id, config).then(
    (res) => {
      // console.log(res.data.data.classroom);
      if (res.data.data.classroom) {
        return res.data.data.classroom;
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

const fetchStudentsofClass = (id) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  //console.log(localStorage.getItem("access_token"));
  //console.log(axios.get(BackendConstants.SPECIFIC_CLASSROOM, params, config));
  return axios
    .get(BackendConstants.STUDENTS_IN_A_CLASSROOM + "/" + id, config)
    .then(
      (res) => {
        // console.log(res.data.data.students);
        if (res.data.data.students) {
          return res.data.data.students;
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

const fetchStudent = (id) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  //console.log(localStorage.getItem("access_token"));
  //console.log(axios.get(BackendConstants.SPECIFIC_CLASSROOM, params, config));
  return axios
    .get(BackendConstants.GET_SPECIFIC_STUDENT + "/" + id, config)
    .then(
      (res) => {
        // console.log(res.data.data.exam_results);
        if (res.data.data.student) {
          return res.data.data.student;
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

const fetchStudentExamResults = (id) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  //console.log(localStorage.getItem("access_token"));
  //console.log(axios.get(BackendConstants.SPECIFIC_CLASSROOM, params, config));
  return axios
    .get(BackendConstants.GET_SPECIFIC_STUDENT_EXAM_RESULTS + "/" + id, config)
    .then(
      (res) => {
        // console.log(res.data.data.exam_results);
        if (res.data.data.exam_results) {
          return res.data.data.exam_results;
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
const ApiService = {
  fetchClassrooms,
  logout,
  fetchOneClass,
  fetchStudentsofClass,
  fetchStudent,
  fetchStudentExamResults,
};
export default ApiService;
