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
        ordersParent.children[this.parentElement.classList[1].slice(1.2)-1].style.display = 'flex';
        ordersParent.style.display = 'block'
        totalPrice();
    })  
})

for(let i = 0; i<ordersParent.childElementCount; i++) {
    ordersParent.children[i].style.display = 'none';
}

let incre = document.querySelectorAll(".increment");
let decre = document.querySelectorAll(".decrement");
let card = document.querySelector("yourCard");
let totalArr = document.querySelectorAll("span.third");
let totalArr2 = Array.from(totalArr);
let total = document.querySelector(".total");

let confirm = document.querySelector(".confirm");
let pop = document.querySelector(".pop");
let choices = document.querySelector(".choices");
let choicesArr = Array.from(ordersParent.children);
let popTotal = document.querySelector(".pop .total");
let imgs = document.querySelectorAll(".show")

let track;
let totalPrice = function() {
    track = 0;
    for(let i = 0; i<choicesArr.length; i++)  {
        if(choicesArr[i].style.display != 'none') {
            track += parseFloat(choicesArr[i].lastElementChild.lastElementChild.lastElementChild.innerHTML.slice(1))
        }
        total.lastElementChild.innerHTML = `$${track}`
    }  
}

incre.forEach(ele => {
    ele.onclick = function(ele) {
        this.previousElementSibling.innerHTML++;
        ordersParent.children[(parseInt(this.parentElement.parentElement.classList[1].slice(1,2)))-1].children[1].lastElementChild.lastElementChild.innerHTML = `$${parseFloat(this.parentElement.parentElement.children[3].innerHTML) * (this.parentElement.children[1].innerHTML)}`       
        ordersParent.children[(parseInt(this.parentElement.parentElement.classList[1].slice(1,2)))-1].children[1].lastElementChild.firstElementChild.innerHTML = `${this.parentElement.children[1].innerHTML}x`
        totalPrice();
    }
})

decre.forEach(ele => {
    ele.onclick = function(ele) {
        if(this.nextElementSibling.innerHTML > 1) this.nextElementSibling.innerHTML--;
        ordersParent.children[(parseInt(this.parentElement.parentElement.classList[1].slice(1,2)))-1].children[1].lastElementChild.lastElementChild.innerHTML = `$${(this.parentElement.parentElement.children[3].innerHTML) * (this.parentElement.children[1].innerHTML)}`
        ordersParent.children[(parseInt(this.parentElement.parentElement.classList[1].slice(1,2)))-1].children[1].lastElementChild.firstElementChild.innerHTML = `$${this.parentElement.children[1].innerHTML}`
        totalPrice();
    }
})

for(let i = 0; i<choicesArr.length; i++) {
    let img1 = imgs[i].cloneNode(true);
    img1.style = 'width: 50px; margin: auto 0;'
    choicesArr[i].insertBefore(img1, choicesArr[i].firstElementChild);
}

let DeleteItem = document.querySelectorAll(".remove");

DeleteItem.forEach(ele => {
    ele.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.children[this.parentElement.parentElement.classList[1]-1].style.display = 'none';     
        totalPrice(); 
        addArray[this.parentElement.parentElement.className.slice(9)-1].style.display = 'flex';
        addArray[this.parentElement.parentElement.className.slice(9)-1].parentElement.firstElementChild.style.border = 'none';
        this.parentElement.lastElementChild.lastElementChild.innerHTML = this.parentElement.lastElementChild.children[1].innerHTML
        this.parentElement.lastElementChild.firstElementChild.innerHTML = '1x';
        this.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.children[[this.parentElement.parentElement.className.slice(9)-1]].children[4].children[1].innerHTML = 1
        if(total.lastElementChild.innerHTML.slice(1) == 0) {
            total.parentElement.children[1].style.display = 'inline';
            for(let i = 2; i<6; i++) {
                total.parentElement.children[i].style.display = 'none';
            }
        }
    }
)
});

confirm.onclick = function(e) {
    pop.style.display = 'block';
    choicesArr.forEach(ele => {
        let newChild = ele.cloneNode(true);
        choices.appendChild(newChild);
    })
    popTotal.lastElementChild.innerHTML = total.lastElementChild.innerHTML;
}

let startOrder = document.querySelector(".startOrder");

startOrder.onclick = () => {
    pop.style.display = 'none';
    total.lastElementChild.innerHTML = `$0`;
    window.location.reload()
}


// let img1 = imgs[0].cloneNode(true)
// choices.firstElementChild.insertBefore(img1, choices.firstElementChild.firstElementChild)
