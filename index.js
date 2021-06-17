function Student(name,enroll,marks){
 var student={};

student.name=name;
student.enroll=enroll;
student.marks=marks;
return student;
}
Student.prototype.getName=function(){
return student.name;
};
var st3= new Student("ashu",19103059,50);
console.log(st3);
var st2= new Student("ashutosh",19103058,52);
console.log(st2);
// console.log(Object.getPrototypeof(st1));
console.log(st1.getName);
