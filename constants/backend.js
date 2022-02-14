const version = "v1/";
export const BACKEND_SERVER_URL = "http://localhost:8080/api/";
const USER = version + "users/";
const TEACHER = version + "teachers/";
const PARENT = version + "parents/";

// USER URLS
export const GET_USER = USER + "user/get";
export const ALL_USER = USER + "pages/";
export const SAVE_USER = USER + "save";
export const SAVE_ROLE = USER + "role/save";
export const ADD_ROLE_TO_USER = USER + "role/addtouser";
export const REFRESH_TOKEN = USER + "refresh/token";

// TEACHER URLS
export const ALL_CLASSROOMS = TEACHER + "classrooms";
export const SPECIFIC_CLASSROOM = TEACHER + "classroom/get";
export const STUDENTS_IN_A_CLASSROOM = TEACHER + "classroom/students";

// PARENT URLS
export const ALL_STUDENTS_BY_PARENT = PARENT + "/students/parent";
export const GET_SPECIFIC_STUDENT = PARENT + "/student";
