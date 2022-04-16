// have taken marks as a object 
// can be an array
// or can take single value for each subject
function ConvertToTitleCase(str) {
    let convertedText= str.split(' ').map(function(element) {
      return (element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
    }).join(' ');
    return convertedText
  }
function Student(name,marks,rollNo){
    this.name=ConvertToTitleCase(name)
    this.subject1=marks.subject1
    this.subject2=marks.subject2
    this.subject3=marks.subject3
    this.rollNo=rollNo
}
Student.prototype.print=function(){
    console.log("Student profile ",`\nName ${this.name} \nsubject 1 ${this.subject1} \nsubject 2 ${this.subject2} \nsubject 3 ${this.subject3}`);
    // console.log(this.rollNo,this.name,this.subject1,this.subject2,this.subject3);
}
Student.prototype.calculations=function(){
   var totalMarks= this.subject1+this.subject2+this.subject3;
   var percentage=(totalMarks/30)*100
   var grade=percentage>70?"A":"B"
   console.log("report card ",`\ntotal marks ${totalMarks} \npercentage ${percentage} \ngrade ${grade}`);
}
var s=new Student("sAm bAnSal",{subject1:10,subject2:10,subject3:10},123);
s.print();
s.calculations();

// for ES6 approach
class StudentES6{
    constructor(name,marks,rollNo){
    this.name=ConvertToTitleCase(name)
    this.subject1=marks.subject1
    this.subject2=marks.subject2
    this.subject3=marks.subject3
    this.rollNo=rollNo
    }
    print(){
        console.log("Student profile ",`\nName ${this.name} \nsubject 1 ${this.subject1} \nsubject 2 ${this.subject2} \nsubject 3 ${this.subject3}`);
        // console.log(this.rollNo,this.name,this.subject1,this.subject2,this.subject3);
    }
   calculations(){
        var totalMarks= this.subject1+this.subject2+this.subject3;
        var percentage=(totalMarks/30)*100
        var grade=percentage>70?"A":"B"
        console.log("report card ",`\ntotal marks ${totalMarks} \npercentage ${percentage} \ngrade ${grade}`);
     }
}
var s1=new Student("sAm bAnSal",{subject1:3,subject2:5,subject3:7},123);
s1.print();
s1.calculations();
