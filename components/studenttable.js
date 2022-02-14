const StudentTable = ({ children }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Admission Number</th>
            <th>Full name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Nationality</th>
            <th>Religion</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default StudentTable;
