import { Component } from "react";
import { useState, useEffect } from "react";
import ClassRoomRow from "../components/classroomrow";
import ClassRoomTable from "../components/classroomtable";
import CheckAuth from "../services/checkauth.service";
import ApiService from "./../services/apiservice.service";
const Home = () => {
  // console.log(classroooms);
  const [classrooms, setClassrooms] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("No classroom data");
  CheckAuth();
  useEffect(() => {
    setLoading(true);
    ApiService.fetchClassrooms()
      .then((res) => {
        res != null
          ? setClassrooms(res)
          : setMessage("Unable to load data. Refresh to try again");
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!classrooms) return <p>{message}</p>;

  return (
    <ClassRoomTable>
      {classrooms.map((classroom) => (
        <ClassRoomRow key={classroom.id} classroom={classroom} />
      ))}
    </ClassRoomTable>
  );
};
export default Home;
