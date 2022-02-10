const ClassRoomRow = ({classroom}) => {
    return (
        <tr>
            <td>{classroom.name}</td>
            <td>{classroom.abbreviation}</td>
            <td>{classroom.status}</td>
            <td>{classroom.id} Action</td>
        </tr>
    );
}
 
export default ClassRoomRow;