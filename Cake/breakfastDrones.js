var delivery_id_confirmations = [];
var drone_ids = [];
//one is missing, find delivery id
//find unique number
//
//add 1-100 id's to the drone_id's
//add it to dliever confirmations
//randomly pick a number from 1-100
//add all numbers except the randomly picked number
//figure out which number was not picked
/*
PROJECT SETUP
*/
for (var i = 1; i < 11; i++) {
    drone_ids.push(i);
    delivery_id_confirmations.push(i);
}
var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("random number is ", randomNumber);
for (var i = 1; i < 11; i++) {
    if (i != randomNumber)
        delivery_id_confirmations.push(i);
}
/* programatically figure out which number does not appear
twice in the delivery confirmations
*/
console.log("deliver ids are :");
var missing_drone_arr = delivery_id_confirmations.reduce(function (acc, nV) {
    if (acc[nV]) {
        console.log("value in the object exists: ", acc[nV]);
        acc[nV]++;
        console.log("after adding one, the value is now ", acc[nV]);
    }
    else {
        console.log("value for nv does not exist: ", nV);
        console.log("adding item to object and setting it to 0");
        acc[nV] = 0;
        console.log("value now is ", acc[nV]);
    }
    return acc;
}, {});
//console.log(missing_drone_arr);
