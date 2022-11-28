function gradeGenerator() {
  //Get student input
  var studentMark = prompt("Enter a mark?");
  //Assign grade depending on the student grade
  var grade;
  if (studentMark >= 0 && studentMark <= 100) {
    if (studentMark > 79) {
      grade = "A";
    } else if (studentMark >= 60 && studentMark < 79) {
      grade = "B";
    } else if (studentMark >= 49 && studentMark < 59) {
      grade = "C";
    } else if (studentMark >= 40 && studentMark < 49) {
      grade = "D";
    } else if (studentMark < 40) {
      grade = "E";
    }
    console.log(grade);
  } else {
    console.log("Marks should be between 0 and 100");
  }
}
