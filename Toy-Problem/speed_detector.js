function speedDetector() {
  //get the user speed
  var speed = prompt("Enter speed?");
  if (speed < 70) {
    console.log("OK");
  } else {
    //get the point depending on the speed for speed above 70
    var points = (speed - 70) / 5;
    //Display appropriate message depeding on whether points are greater than 12
    if (points > 12) {
      console.log("License suspended");
    } else {
      console.log("Points " + points);
    }
  }
}
