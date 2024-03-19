// Write your JavaScript code here!



window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectPlanet.name, selectPlanet.diameter, selectPlanet.star, selectPlanet.distance, selectPlanet.moons, selectPlanet.image)
        //console.log(addDestinationInfo)
    });
     
 //formSubmission 
    
    //const myForm = document.querySelector(form);
    const button = document.querySelector('#formSubmit');
   button.addEventListener("click", (event) => {
    //RECENT DELETE : REMOVE VALUE (document.querySelector("lala").value) 
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoMass]");
    let list = document.querySelector('#faultyItems');
    

    formSubmission(document, list, pilot.value, copilot.value, fuelLevel, cargoLevel);
        event.preventDefault();
   });

 }); 
