import StudentTable from "../../routes/students/StudentsTable"

const Content = ({type, data}) => {
    if(type=="students"){
        return <StudentTable students={data} />
    }
  return (
    <div>Content</div>
  )
}

export default Content