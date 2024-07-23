export interface Student{
    id:number,
    name:string,
    age:number,
    gender:string,
    rollNo:number,
    email:string,
    isOnsiteAllowed:boolean,
    entrytest:Entrytest,
}
export interface Entrytest{
    isPassed:boolean,
    obtainedMarks:number,
    totalMarks:number,
    grade:string,
    Division:string,
}