import { Component } from "react";
import { useState, useEffect } from "react";
import ClassRoomRow from "../components/classroomrow";
import ClassRoomTable from "../components/classroomtable";

const Home = () => {
  // console.log(classroooms);
  const [classrooms, setClassrooms] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!classrooms) return <p>No profile data</p>;

  return (
    <ClassRoomTable>
      {classroooms.map((classroom) => (
        <ClassRoomRow key={classroom.id} classroom={classroom} />
      ))}
    </ClassRoomTable>
  );
};
export default Home;
