import Link from "next/link";
const StudentRow = ({ student }) => {
  return (
    <tr>
      <td>{student.adm_no}</td>
      <td>
        {student.first_name} {student.last_name}
      </td>
      <td>{student.gender}</td>
      <td>{student.age}</td>
      <td>{student.nationality}</td>
      <td>{student.religion}</td>
      <td>
        <Link href="/student/[id]" as={`/student/${student.id}`}>
          view
        </Link>
      </td>
    </tr>
  );
};

export default StudentRow;
