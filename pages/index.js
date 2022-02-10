import { Component } from 'react'
import ClassRoomRow from '../components/classroomrow'
import ClassRoomTable from '../components/classroomtable'

const Home = ({classroooms}) => {
  // console.log(classroooms);


  
  return (

    <ClassRoomTable>
      {classroooms.map((classroom) => (<ClassRoomRow key={classroom.id} classroom={classroom} />))}
            
    </ClassRoomTable>
    
  )
}
export const getStaticProps = () => {
  return {
    props : {
      classroooms: [
        {
          id: 1,
          name: "class 1",
          abbreviation: "C1",
          status: "active"
        },
        {
          id: 2,
          name: "class 2",
          abbreviation: "C2",
          status: "active"
        },
        {
          id: 3,
          name: "class 3",
          abbreviation: "C3",
          status: "disabled"
        }
      ]
      }
    }
  }


export default Home;