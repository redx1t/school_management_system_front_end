import ApiService from "./../services/apiservice.service";
import { useState, useEffect } from "react";
import CheckAuth from "./../services/checkauth.service";
import StudentTable from "./studenttable";
import StudentRow from "./studentrow";
const ClassroomView = ({ classroom }) => {
  const [students, setStudents] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("fetching student data...");
  CheckAuth();
  useEffect(() => {
    setLoading(true);
    const datafetch = async () => {
      ApiService.fetchStudentsofClass(classroom.id)
        .then((res) => {
          res != null
            ? setStudents(res)
            : setMessage("Unable to load data. Refresh to try again");
        })
        .then(() => {
          setLoading(false);
        });
    };
    datafetch();
    //console.log(id);
  }, []);

  console.log();

  if (isLoading) return <p>Loading...</p>;
  if (!students) return <p>{message}</p>;
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header text-center">
            <h1 className="text-uppercase">{classroom.name}</h1>
            <p>{classroom.abbreviation}</p>
          </div>
          <div className="card-body">
            <StudentTable>
              {students.map((student) => (
                <StudentRow key={student.id} student={student} />
              ))}
            </StudentTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomView;
