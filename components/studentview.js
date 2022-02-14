import ApiService from "./../services/apiservice.service";
import { useState, useEffect } from "react";
import CheckAuth from "./../services/checkauth.service";
import ExamResultsTable from "./examresultstable";
import ExamResultsRow from "./examresultsrow";
const StudentView = ({ student }) => {
  const [examresults, setExamResults] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("fetching student data...");
  CheckAuth();
  useEffect(() => {
    setLoading(true);
    const datafetch = async () => {
      ApiService.fetchStudentExamResults(student.id)
        .then((res) => {
          res != null
            ? setExamResults(res)
            : setMessage("Unable to load data. Refresh to try again");
        })
        .then(() => {
          setLoading(false);
        });
    };
    datafetch();
    //console.log(id);
  }, []);

  console.log([examresults, student]);

  if (isLoading) return <p>Loading...</p>;
  if (!examresults) return <p>{message}</p>;
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h1 className="text-uppercase text-center card-title">
              {student.first_name + " " + student.last_name}
              <span> - {student.classRoom.name}</span>
            </h1>
            <p className="text-center pt-2 pb-2">Biodata</p>
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <td>Admission Number</td>
                  <td>{student.adm_no}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{student.gender}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{student.age}</td>
                </tr>
                <tr>
                  <td>Nationality</td>
                  <td>{student.nationality}</td>
                </tr>
                <tr>
                  <td>Religion</td>
                  <td>{student.religion}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-body">
            <h5>EXAM RESULTS HISTORY</h5>
            <ExamResultsTable>
              {examresults.map((examresult) => (
                <ExamResultsRow key={examresult.id} examresult={examresult} />
              ))}
            </ExamResultsTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentView;
