import { useEffect } from "react"
const Courses = () => {
  useEffect(() => {
    document.title = "Courses | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  return (
    <div>Courses</div>
  )
}

export default Courses