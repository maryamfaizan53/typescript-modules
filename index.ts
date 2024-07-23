import { getAllStudents, getOnsiteStudents, getaStudent } from "./student"
import { Student  } from "./interfaces"

const allStudents = getAllStudents();
console.log(allStudents);

const onsiteStudents = getOnsiteStudents();
console.log(onsiteStudents);

const singleStudent = getaStudent(1);
console.log(singleStudent)