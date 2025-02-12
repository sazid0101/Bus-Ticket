//when seat clicks seat number will increase
const mySeat = document.getElementsByClassName("seat")
let selectedSeat = 0;

for(const seat of mySeat){
    seat.addEventListener("click", function(event){
       selectedSeat++

       const seatName = event.target.innerText ;
       const seatPrice = "550 tk" ;
       console.log(seatName)
       console.log(seatPrice)
       const selectedContainer = document.getElementById("selected-seat-container");

       const li = document.createElement("li");
       li.style.display = "flex";
        li.style.justifyContent = "space-between";

       const p = document.createElement("p");
       p.innerText = seatName;

       const p2 = document.createElement("p");
       p2.innerText = seatPrice;

       li.appendChild(p)
       li.appendChild(p2)

       selectedContainer.appendChild(li)
       

       setInnerText("seat-count", selectedSeat);  //function call, id & value
    })
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value ;  //this function is for set inner text.
}