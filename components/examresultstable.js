const ExamResultsTable = ({ children }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Exam Name</th>
            <th>start date</th>
            <th>points</th>
            <th>Comments</th>
            <th>Type</th>
            <th>Session</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default ExamResultsTable;
