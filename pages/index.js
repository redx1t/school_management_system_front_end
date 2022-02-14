import { Component } from "react";
import { useState, useEffect } from "react";
import ClassRoomRow from "../components/classroomrow";
import ClassRoomTable from "../components/classroomtable";
import CheckAuth from "../services/checkauth.service";

const Home = () => {
  // console.log(classroooms);
  const [classrooms, setClassrooms] = useState(null);
  const [isLoading, setLoading] = useState(false);
  CheckAuth();
  useEffect(() => {
    setLoading(false);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!classrooms) return <p>No classroom data</p>;
  if (classrooms)
    return (
      <ClassRoomTable>
        {classroooms.map((classroom) => (
          <ClassRoomRow key={classroom.id} classroom={classroom} />
        ))}
      </ClassRoomTable>
    );
};
export default Home;
