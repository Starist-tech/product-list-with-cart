let add = document.getElementsByClassName("add");
let addArray = Array.from(add);

addArray.forEach(ele => {
    ele.addEventListener("click", function () {
        this.style.display = "none";
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

