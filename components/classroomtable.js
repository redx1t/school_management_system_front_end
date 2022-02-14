const ClassRoomTable = ({ children }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>class name</th>
            <th>abbreviation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default ClassRoomTable;
