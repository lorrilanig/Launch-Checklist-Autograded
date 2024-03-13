// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = 
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    
 }
 
 function validateInput(testInput) {
    if(testInput === '') {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let launchStatus = document.querySelector('#launchStatus');
    
    if (validateInput(pilot) !== 'Not a Number' || validateInput(copilot) !== 'Not a Number') {
        alert("Enter valid inputs")
      } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = 'visible';
      }
    
      if (validateInput(fuelLevel) === 'Is a Number') {
        if (Number(fuelLevel) < 10000) {
          list.style.visibility = 'visible'
          launchStatus.style.color = 'red'
          launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
          fuelStatus.innerHTML = 'Fuel level too low for launch'
          
        } else {
          fuelStatus.innerHTML = 'Fuel level high enough for launch'
          
        }
      }
    
      if (validateInput(cargoLevel) === 'Is a Number') {
        if (Number(cargoLevel) > 10000) {
          list.style.visibility = 'visible'
          launchStatus.style.color = 'red'
          launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
          cargoStatus.innerHTML = 'Cargo mass too heavy for launch'
        } else {
          cargoStatus.innerHTML = 'Cargo mass low enough for launch'
        }
      }
      if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        launchStatus.style.color = 'green';
        list.style.visibility = 'visible'
      }
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(res) {
        return res.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
   return planets[Math.floor(Math.random()*planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;