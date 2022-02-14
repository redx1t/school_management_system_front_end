import Link from "next/link";
const ExamResultsRow = ({ examresult }) => {
  console.log(examresult);
  return (
    <tr>
      <td>{examresult.exam.name}</td>
      <td>{examresult.exam.start_date}</td>
      <td>{examresult.points}</td>
      <td>{examresult.comments}</td>
      <td>{examresult.exam.examType.name}</td>
      <td>
        {examresult.exam.classRoom.session.term +
          " " +
          examresult.exam.classRoom.session.year}
      </td>
      <td>{examresult.exam.classRoom.grade.name}</td>
    </tr>
  );
};

export default ExamResultsRow;
