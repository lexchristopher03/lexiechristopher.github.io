// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
const storyText = "The day was nice, 87 fahrenheit, so :insertx: went on a stroll. They soon arrived at :inserty:,they were speechless for a solid minute, then :insertx: :insertz:. Bob happened to watch it all go down, but s/he expected something like that to happen — as s/he always does";

const insertX = ["Billy", "the Dwarf", "Cinderella"];
const insertY = ["the golf Course", "Winter Park", "the Caribbean Cruise"];
const insertZ = ["fell off a cliff", "was Impaled with a bow and arrow ", "got into a fight with spiderman"];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
  // make newStory variable to hold the initial story text
  let newStory = storyText;

  // make variables to store random items from each array
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // replace placeholders in newStory with random values
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem); // Replacing second occurrence
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // check if a custom name is entered, replace "Bob" with the entered name
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // Convert to UK units if needed
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone'; // Convert pounds to stones
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade'; // Convert Fahrenheit to Celsius

    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  // show the new story in the HTML element
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
