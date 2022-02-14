import { useRouter } from "next/router";
import ClassroomView from "./../../components/classroomview";
import { useState, useEffect } from "react";
import CheckAuth from "./../../services/checkauth.service";
import ApiService from "./../../services/apiservice.service";
import { parse } from "querystring";
import StudentView from "../../components/studentview";

const Student = () => {
  const router = useRouter();
  const { id } = router.query;
  const [student, setStudent] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("No classroom data");
  CheckAuth();
  useEffect(() => {
    setLoading(true);
    if (!id) {
      return;
    }
    const datafetch = async () => {
      ApiService.fetchStudent(id)
        .then((res) => {
          res != null
            ? setStudent(res)
            : setMessage("Unable to load data. Refresh to try again");
        })
        .then(() => {
          setLoading(false);
        });
    };
    datafetch();
    //console.log(id);
  }, [id]);

  console.log();

  if (isLoading) return <p>Loading...</p>;
  if (!student) return <p>{message}</p>;
  return (
    <>
      <StudentView student={student} />
    </>
  );
};

export default Student;
