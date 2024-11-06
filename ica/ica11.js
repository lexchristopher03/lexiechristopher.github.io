// fotune teller 
function tellFortune(children, partnerName, location, job) {
    const fortune = "You will be a " + job + " in " + location + ", and married to " + partnerName + " with " + children + " kids.";
    document.getElementById("fortuneOutput").innerHTML +=  fortune + "<br>";
  }
  
  tellFortune(2, "Lexie", "Boulder", "creative technology design");
  tellFortune(3, "Haley", "Missouri", "nursing");
  tellFortune(1, "Lucy", "New York", "fashion");
  



  // dog-age calculator
function calculateDogAge(puppyAge) {
    const dogAge = puppyAge * 7;
    return "Your doggie is " + dogAge + " years old in dog years!";
  }
  
//   *use <br> to put each sentence on its own line
  document.getElementById("dogAgeOutput").innerHTML +=  calculateDogAge(2) + "<br>";
  document.getElementById("dogAgeOutput").innerHTML +=  calculateDogAge(5) + "<br>";
  document.getElementById("dogAgeOutput").innerHTML +=  calculateDogAge(10) + "<br>";

//   if user inputs dogs age
  function getDogAge() {
    const userAge = document.getElementById("dogAgeInput").value;
    const result = calculateDogAge(userAge);
    document.getElementById("dogAgeOutput").innerHTML +=  result + "<br>";
  }




  // reverse number 
function reverseNumber(num) {
    const reversed = parseInt(num.toString().split("").reverse().join(""));
    return reversed;
  }
  
  document.getElementById("reverseNumberOutput").innerHTML +=   reverseNumber(5678910) + "<br>";
  document.getElementById("reverseNumberOutput").innerHTML +=  reverseNumber(12345) + "<br>";
  



  // alphabet 
  function alphabetizeString(str) {
    return str.split("").sort().join("");
  }
  
  document.getElementById("alphabeticalOutput").innerHTML +=  alphabetizeString("colorado") + "<br>";
  document.getElementById("alphabeticalOutput").innerHTML +=  alphabetizeString("disneyland") + "<br>";
  
// capitalize first letter of a word 
  function capitalizeWords(str) {
    return str
      .split(" ")
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
  
  document.getElementById("capitalizerOutput").innerHTML +=  capitalizeWords("the quick brown fox") + "<br>";
  document.getElementById("capitalizerOutput").innerHTML += capitalizeWords("lexie christopher is fire ") + "<br>";