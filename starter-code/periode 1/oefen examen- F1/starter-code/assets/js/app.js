/**
 * This variable represents the entire list of race data. It calls the 
 * `fetchFormula1Data()` function that builds a (random) datastructure. You are
 * supposed to work with this variable in your project.
 * 
 * WARNING: do not change or delete this code
 */
const racedata = fetchFormula1Data();

const driverArray = new Array();
const driverList = document.getElementById("driver");
const tableElement = document.getElementById("laps");

const submintBtn = document.getElementById("submit");
submintBtn.addEventListener("click", function(e) {
  addDriverLapTime()  // CHECK THIS
}

/**
 * Initializes the app. This function is called when the page is fully loaded
 * (the window load event).
 */
function init() {
  //TODO initialize the application here
  displayDrivers();
  displayDriversTotalTime();
  displayFastestTime();
}
// Register the `init` function on the load event (when the DOM is ready). 
window.addEventListener('load', init);

function displayDrivers(){
  racedata.forEach((driver) => {
    let optionElement = document.createElement("option");
    optionElement.textContent = driver.name;
    driverList.appendChild(optionElement);

    driverArray.push(driver.name);
  });
}

function displayDriversTotalTime() {
  driverArray.forEach((theName) => {
    let trElement = document.createElement("tr");
    let nameElement = document.createElement("td");
    nameElement.textContent = theName;

    let lapElement = document.createElement("td");
    lapElement.textContent = formatTime(calcDriverTotalTime(theName));
    tableElement.appendChild
  })
}

function calcDriverTotalTime(driverName) {
  let iTime = 0.0;
  racedata.forEach((driver) => {
    if(driver.name === driverName) {
      driver.laps.forEach((laps) => {
        iTime += laps;
    }
    }
  }
}

// voegt nieuwe tr toe - onder thead
addLapTimeButton.addEventListener('click', function() {
  // Create a new <th> element
  let newTableHeader = document.createElement('th');
  
  // Set content for the new <th> element
  newTableHeader.innerHTML = input.value;
  
  // Append the new <th> to the <tr>
  tableRow.appendChild(newTableHeader);
});

// voeg nieuwe ronde tijd toe onder total
const btn = document.getElementById('submit');
const input = document.getElementById('lapTime');
const out = document.getElementById('newLapTime');

function updateOutput() {
  out.innerHTML = input.value;
}
btn.addEventListener('click', updateOutput);
out.innerHTML = input.value

// rekent nieuwe totale ronde tijd uit


/**
 * Returns an object containing the values of the user input. The object is
 * structured as follows:
 *  - `carNumber` - holds the car number of the driver selected by the user.
 *    this is the `value` attribute of the selected `<option>`.
 *  - `lapTime` - holds the content of the lapTime input converted to a number
 * 
 * @returns an object containing the values of the user input
 */
function getUserInput() {
  return {
    // use `parseInt()` to convert a string into a number
    carNumber: parseInt(document.getElementById('driver').value),
    // use `parseFloat()` to convert a string into a number
    lapTime: parseFloat(document.getElementById('lapTime').value)
  };
}