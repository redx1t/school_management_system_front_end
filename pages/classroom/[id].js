import { useRouter } from "next/router";
import ClassroomView from "./../../components/classroomview";
import { useState, useEffect } from "react";
import CheckAuth from "./../../services/checkauth.service";
import ApiService from "./../../services/apiservice.service";
import { parse } from "querystring";

const Classroom = () => {
  const router = useRouter();
  const { id } = router.query;
  const [classroom, setClassroom] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("No classroom data");
  CheckAuth();
  useEffect(() => {
    setLoading(true);
    if (!id) {
      return;
    }
    const datafetch = async () => {
      ApiService.fetchOneClass(id)
        .then((res) => {
          res != null
            ? setClassroom(res)
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
  if (!classroom) return <p>{message}</p>;
  return (
    <>
      <ClassroomView classroom={classroom} />
    </>
  );
};

export default Classroom;
