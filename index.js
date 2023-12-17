function scuberGreetingForFeet(numOfFeet){
  // Write your code here!
 
 if (numOfFeet <= 400) {
  return 'This one is on me!';
 }

 else if (numOfFeet >= 400 && numOfFeet <= 2000) {
  return 'That will be twenty bucks.';
 }

 else if (numOfFeet >= 2000 && numOfFeet <= 2500) {
  return 'I will gladly take your thirty bucks.';
 }

 else { 
  return 'No can do.';
 }

}

function ternaryCheckCity(city){
  // Write your code here!
  return city == "NYC" ? "Ok, sounds good." : "No go."
 }

 function switchOnCharmFromTip(tip) {
  // Adjust the code to match the test expectations
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}