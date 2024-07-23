let add = document.getElementsByClassName("add");
let addArray = Array.from(add);

addArray.forEach(ele => {
    ele.addEventListener("click", function () {
        this.style.display = "none";
    })  
})

