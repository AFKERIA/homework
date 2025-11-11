function StrToNum(k) {
    return parseInt(k, 10);
}
var cur = "";
var ds = 0;
var dau = 0;
var a1 = document.querySelector('#p1');
var a2 = document.querySelector('#p2');
var a3 = document.querySelector('#p3');
var a4 = document.querySelector('#p4');
var a5 = document.querySelector('#p5');
var a6 = document.querySelector('#p6');
var a7 = document.querySelector('#p7');
var a8 = document.querySelector('#p8');
var a9 = document.querySelector('#p9');
var a0 = document.querySelector('#p0');
var ad = document.querySelector('#ad');
var sub = document.querySelector('#sub');
var mul = document.querySelector('#mul');
var div = document.querySelector('#div');
var A = document.querySelector('#pA');
var eql = document.querySelector('#eql');
var x = document.querySelector('#x');
var screen = document.querySelector('p');

screen.innerHTML = "start: "
var chia = 0;
var nhan = "1";
a1.onclick = function() {
    screen.innerHTML += "1";
    cur += "1";
}
a2.onclick = function() {
    screen.innerHTML += "2";
    cur += "2";
}
a3.onclick = function() {
    screen.innerHTML += "3";
    cur += "3";
}
a4.onclick = function() {
    screen.innerHTML += "4";
    cur += "4";
}
a5.onclick = function() {
    screen.innerHTML += "5";
    cur += "5";
}
a6.onclick = function() {
    screen.innerHTML += "6";
    cur += "6";
}
a7.onclick = function() {
    screen.innerHTML += "7";
    cur += "7";
}
a8.onclick = function() {
    screen.innerHTML += "8";
    cur += "8";
}
a9.onclick = function() {
    screen.innerHTML += "9";
    cur += "9";
}
a0.onclick = function() {
    screen.innerHTML += "0";
    cur += "0";
}
ad.onclick = function() {

    screen.innerHTML += "+";
    var x;
    if(chia) {
        x = parseInt(StrToNum(nhan) / StrToNum(cur));
        cur = x.toString();

    }
    else {
        x = StrToNum(nhan) * StrToNum(cur);
        cur = x.toString();
    }
    nhan = "1";
    if(dau == 0 || dau == 1) ds += StrToNum(cur);
    else ds -= StrToNum(cur);
    dau = 1;
    cur = "";
    chia = 0;
}
sub.onclick = function() {
    screen.innerHTML += "-";
    var x;
    if(cur == "") x = 0;
    else {
        var x;
        if(chia) {
            x = parseInt(StrToNum(nhan) / StrToNum(cur));
            cur = x.toString();

         }
        else {
            x = StrToNum(nhan) * StrToNum(cur);
            cur = x.toString();
        }
    }
    cur = x.toString();
    nhan = "1";
    if(dau == 0 || dau == 1) ds += StrToNum(cur);
    else ds -= StrToNum(cur);
    dau = -1;
    cur = "";
    chia = 0;
}
mul.onclick = function() {
    screen.innerHTML += "*";
    if(chia) {
        var x = parseInt(StrToNum(nhan) / StrToNum(cur));
        nhan = x.toString();
        cur = "";
        chia = 0;
        return ;
    }
    var x = StrToNum(nhan) * StrToNum(cur);
    nhan = x.toString();
    cur = "";
    chia = 0;
}
div.onclick = function() {
    screen.innerHTML += "/";
    var x;
    if(chia) x = parseInt(StrToNum(nhan) / StrToNum(cur));
    else x = StrToNum(nhan) * StrToNum(cur);
    nhan = x.toString();
    cur = "";
    chia = 1;
}
A.onclick = function() {
    screen.innerHTML = "start: ";
    nhan = "1";
    cur = "";
    dau = 0;
    ds = 0;
    chia = 0;
}
x.onclick = function() {
    var t = screen.innerHTML;
    var newt = t.slice(0, -1);
    screen.innerHTML = newt;
    
}
eql.onclick = function() {
    
    if(cur == "") {
        screen.innerHTML = "invalid";
        return ;
    }
    var x;
    if(chia) x = parseInt(StrToNum(nhan) / StrToNum(cur));
    else x = StrToNum(nhan) * StrToNum(cur);
    if(dau == 1 || dau == 0) ds += x;
    if(dau == -1) ds -= x;
    if(ds < 0) dau = -1;
    else dau = 1;
    x = ds;
    if(ds < 0) x = -x; 
    cur = x.toString();
    nhan = "1";
    ds = 0;
    chia = 0;
    if(dau == -1) screen.innerHTML = "start: -" + cur;
    else screen.innerHTML = "start: " + cur;
}
