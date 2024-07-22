let add = document.getElementsByClassName("add");
add.forEach(e => {
    e.onclick = function() {
        e.style.display = 'none';
    };
});