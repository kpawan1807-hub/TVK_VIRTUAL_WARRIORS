document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault();

// GET VALUES
let name = document.getElementById("name").value;
let year = document.getElementById("year").value;
let consti = document.getElementById("constituency").value;
let district = document.getElementById("district").value;
let state = document.getElementById("state").value;
let position = document.getElementById("position").value;

// SET VALUES (THIS WAS THE ISSUE BEFORE)
document.getElementById("nameText").innerText = name;
document.getElementById("yearText").innerText = year;
document.getElementById("constText").innerText = consti;
document.getElementById("districtText").innerText = district;
document.getElementById("stateText").innerText = state;
document.getElementById("positionText").innerText = position;

// IMAGE LOAD
let file = document.getElementById("photo").files[0];

if(file){
let reader = new FileReader();

reader.onload = function(){
document.getElementById("userPhoto").src = reader.result;
}

reader.readAsDataURL(file);
}

});