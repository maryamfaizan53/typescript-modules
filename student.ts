import student from "./data"
import {Student} from "./interfaces"



export const getAllStudents = ()=>{
    return student
}
export const getOnsiteStudents = ()=>{
    const result= student.filter((student)=>student.isOnsiteAllowed)
        return (result);
    }

   export const getaStudent = (id:number) => {
        const result = student.find((student)=>student.id===id)
        return result;

    }
   export const onSiteStudents = getOnsiteStudents();

    export const isStudentOnsite = (rollNo:number)=>{
        
        const foundUser = student.find((student) => student.rollNo === rollNo && student.isOnsiteAllowed);
        if (foundUser) {
          return true;
        } else {
          return false;
        }
      }


      console.log(`isStudentOnSite: ${isStudentOnsite(22004)}`)

    console.log(`onsiteStudents: ${onSiteStudents}`)
    