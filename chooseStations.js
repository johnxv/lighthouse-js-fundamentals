/*
  Plan of action:
  1. create a for loop to loop through array.
  2. compare second and third element of array from stipulation.
*/



const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function (stations) {
  let viableStations = [];
  for(let i = 0; i < stations.length; i++) {
    if((stations[i][1] >= 20) && (stations[i][2] === "school" || stations [i][2] === "community centre")) {
      viableStations.push(stations[i][0]);
    }  
  }
  return viableStations;
};

console.log(chooseStations(stations));
