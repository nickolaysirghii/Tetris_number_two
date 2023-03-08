for(let i=0;i<50;i++){
    let one = document.createElement("div");
    let two = document.querySelector(".infoWindow");
    one.setAttribute("class","a"+i)
    one.style.width = "1%";
one.style.height = "2%";
one.style.backgroundColor = "blue";
two.append(one);
};
for(let i=50;i<250;i++){
    let one = document.createElement("div");
let two = document.querySelector(".leftBd");
one.setAttribute("class","a"+i);
one.style.backgroundColor = "black";
one.style.width = "9.7%";
one.style.height = "4.8%";
two.append(one);
};
let fun1 = function(a){
    let one = document.querySelector(".a"+ a);
    let one2 = document.querySelector(".a"+ (a+1));
    let one3 = document.querySelector(".a"+ (a-1));
    let one4 = document.querySelector(".a"+ (a-2));
    one.style.backgroundColor = "red";
    one2.style.backgroundColor = "red";
    one3.style.backgroundColor = "red";
    one4.style.backgroundColor = "red";

};
let fun2 = function(a){
    let one = document.querySelector(".a"+ (a-10));
    let one2 = document.querySelector(".a"+ (a-9));
    let one3 = document.querySelector(".a"+ (a-11));
    let one4 = document.querySelector(".a"+ (a-12));
    one.style.backgroundColor = "black";
    one2.style.backgroundColor = "black";
    one3.style.backgroundColor = "black";
    one4.style.backgroundColor = "black";
};
let f2 =function(a){
    setInterval(function(){a += 10;
    fun1(a);fun2(a)},1000);
};
f2(65)




