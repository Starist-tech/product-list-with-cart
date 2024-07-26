let add = document.getElementsByClassName("add");
let addArray = Array.from(add);
let ordersParent = document.querySelector(".orders")

addArray.forEach(ele => {
    ele.addEventListener("click", function () {
        let newOrder = document.createElement("div")
        newOrder.className = "newOrder";
        newOrder.innerHTML = this.parentElement.childNodes[5].innerHTML;
        ordersParent.appendChild(newOrder)
        this.style.display = "none";
        this.parentElement.firstElementChild.style.border = "solid 2px var(--Red)"
    })  
})

let incre = document.querySelectorAll(".increment");
let decre = document.querySelectorAll(".decrement");

incre.forEach(ele => {
    ele.onclick = function(ele) {
        this.previousElementSibling.innerHTML++
    }
})

decre.forEach(ele => {
    ele.onclick = function(ele) {
        if(this.nextElementSibling.innerHTML > 0) this.nextElementSibling.innerHTML--
    }
})

