let add = document.getElementsByClassName("add");
let addArray = Array.from(add);
let ordersParent = document.querySelector(".orders")

addArray.forEach(ele => {
    ele.addEventListener("click", function () {
        let card =  this.parentElement.parentElement.parentElement.lastElementChild.children;
        card[1].style.display = 'none';
        card[5].style.display = 'none';
        card[3].style.display = 'flex';
        card[4].style.display = 'flex';
        card[5].style.display = 'block'; 
        this.style.display = "none";
        this.parentElement.firstElementChild.style.border = "solid 2px var(--Red)";
    })  
})

for(let i = 0; i<9; i++) {
    addArray[i].onclick = () => {
        ordersParent.children[i].style.display = "none";
    }
}

let incre = document.querySelectorAll(".increment");
let decre = document.querySelectorAll(".decrement");
let card = document.querySelector("yourCard");
let firsts = document.getElementsByClassName("first");
let firstsArr = Array.from(firsts);

incre.forEach(ele => {
    ele.onclick = function(ele) {
        this.previousElementSibling.innerHTML++;
        for(let i = 0; i<add.length; i++) {
            if (incre[i].parentElement.parentElement.children[2].innerHTML == firstsArr[i].innerHTML) {
                console.log("true")
            }
        }
}})

decre.forEach(ele => {
    ele.onclick = function(ele) {
        if(this.nextElementSibling.innerHTML > 0) this.nextElementSibling.innerHTML--
    }
})

