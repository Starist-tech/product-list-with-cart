let add = document.getElementsByClassName("add");
let addArray = Array.from(add);
let ordersParent = document.querySelector(".orders")

addArray.forEach(ele => {
    ele.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.lastElementChild.children[1].style.display = 'none' //deleting the descreption
        this.parentElement.parentElement.parentElement.lastElementChild.children[5].style.display = 'none' //deleting the cake image
        this.parentElement.parentElement.parentElement.lastElementChild.children[3].style.display = 'flex' //deleting the cake image
        this.parentElement.parentElement.parentElement.lastElementChild.children[4].style.display = 'flex' //deleting the cake image
        this.parentElement.parentElement.parentElement.lastElementChild.children[5].style.display = 'block' //deleting the cake image
        let newOrder = document.createElement("div")
        newOrder.className = "newOrder";
        let h2 = document.createElement("h2");
        h2.innerHTML = this.parentElement.childNodes[5].innerHTML;
        newOrder.appendChild(h2);
        let desc = document.createElement("div");
        desc.className = 'desc';
        let first = document.createElement('span');
        first.innerHTML = `${this.previousElementSibling.children[1].innerHTML}x`; first.className = 'first';
        let second = document.createElement('span');
        second.innerHTML = '$7'; second.className = 'second';
        let third = document.createElement('span');
        third.innerHTML = '$7'; third.className = 'third';
        desc.appendChild(first);desc.appendChild(second);desc.appendChild(third);
        newOrder.appendChild(desc);
        ordersParent.appendChild(newOrder);
        this.style.display = "none";
        this.parentElement.firstElementChild.style.border = "solid 2px var(--Red)";
    })  
})

let incre = document.querySelectorAll(".increment");
let decre = document.querySelectorAll(".decrement");

incre.forEach(ele => {
    ele.onclick = function(ele) {
        this.previousElementSibling.innerHTML++;
}})

decre.forEach(ele => {
    ele.onclick = function(ele) {
        if(this.nextElementSibling.innerHTML > 0) this.nextElementSibling.innerHTML--
    }
})

