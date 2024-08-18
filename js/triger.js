let tower = new Array();
document.querySelectorAll('.tower-box').forEach((element, index) => {
    tower[index] = element.getBoundingClientRect();
});


// let t = document.querySelector('.tower-box') //getBoundingClientRect();
console.log(tower);