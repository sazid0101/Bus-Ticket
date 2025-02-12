const mySeat = document.getElementsByClassName("seat")
let selectedSeat = 0;

for(const seat of mySeat){
    seat.addEventListener("click", function(event){
       selectedSeat++
       const seatCount = document.getElementById("seat-count")
       seatCount.innerText = selectedSeat ;
    })
}