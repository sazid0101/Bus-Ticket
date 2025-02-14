//when seat clicks seat number will increase
const mySeat = document.getElementsByClassName("seat")

let selectedSeat = 0;

for(const seat of mySeat){
    seat.addEventListener("click", function(event){
        
        event.target.setAttribute("disabled", "true");
       if(selectedSeat>= 4){
        alert("you already selected 4 seats")
        return
       }else{
        if(!seat.classList.contains('selected')){
            selectedSeat++;
                seat.classList.add('selected');
                seat.classList.add('bg-green-500');
                return
        }
       }

       //selected seat update in the right side.
       const seatName = event.target.innerText ;
       const seatPrice = "550 tk" ;

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

       //total price update...
       totalPrice("total-price",parseInt(seatPrice))
       
     grandTotal("grand-total", parseInt(seatPrice))
    

       setInnerText("seat-count", selectedSeat);  //function call, id & value
      //decrease seat from total40 seat.
       const fixedSeat = document.getElementById("fixed-seat").innerText ;
       document.getElementById("fixed-seat").innerText = fixedSeat-1

       
    })
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value ;  //this function is for set inner text.
}

//total price update...
function totalPrice(id,value){
    const totalCostStr = document.getElementById(id).innerText ;

const totalCost = parseInt(totalCostStr);
const totalPrice = totalCost + parseInt(value)
//    document.getElementById("total-price").innerText = totalPrice
setInnerText("total-price", totalPrice)
}

  //grand total
 function grandTotal(category){
    const grandTotalStr = document.getElementById("total-price").innerText;
    const grandTotal = parseInt(grandTotalStr);
    
    if(category == "couple20" ){
        setInnerText("grand-total", ((grandTotal / 100)* 80))
    }else if(category == "NEW15"){
        setInnerText("grand-total", ((grandTotal / 100)* 85))
    }else{
        setInnerText("grand-total", grandTotal)
    }
 }

// function grandTotal(category){
//     const grandTotalStr = document.getElementById("total-price").innerText;
//     const grandTotal = parseInt(grandTotalStr);
    
//    document.getElementById("apply-btn").addEventListener("click",function(){
//     checkCondition("NEW15","couple 20")
//    function checkCondition(){
//     if(category == "couple20" ){
//         setInnerText("grand-total", (grandTotal * 0.8))
//     }else if(category == "NEW15"){
//         setInnerText("grand-total", ((grandTotal / 100)* 85))
//     }else{
//         setInnerText("grand-total", grandTotal)
//     }
//    }
//    })
    
//  }
