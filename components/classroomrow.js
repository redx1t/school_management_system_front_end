import Link from 'next/link'
const ClassRoomRow = ({classroom}) => {
    return (
        <tr>
            <td>{classroom.name}</td>
            <td>{classroom.abbreviation}</td>
            <td>{classroom.status}</td>
            <td><Link href="/classroom/[id]" as={`/classroom/${classroom.id}`}>view</Link></td>
        </tr>
    );
}
 
export default ClassRoomRow;