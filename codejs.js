var NameEle = document.querySelector('.name');
var p1 = document.querySelector('#a');

NameEle.onblur = function(e) {
    if(e.target.value == "") {
        p1.innerHTML = "Vui long nhap ten";
    }
}
NameEle.oninput = function() {
    p1.innerHTML = "";
} 

var EmailEle = document.querySelector('#email');
var p2 = document.querySelector('#b');
EmailEle.onblur = function(e) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(e.target.value)) {
        p2.innerHTML = "Vui long nhap email";
    }
}
EmailEle.oninput = function() {
    p2.innerHTML = "";
} 