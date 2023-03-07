
let namesClass = [];
for(let i=0;i<200;i++){
    let a = "a" + i;
    namesClass.push(a);
};
for(let i=0;i<200;i++){
    let one = document.createElement("div");
let two = document.querySelector(".leftBd");
one.setAttribute("class","a"+i);
one.style.backgroundColor = "black";
one.style.width = "9.7%";
one.style.height = "4.8%";
two.append(one);
};

let bam = document.querySelector(".a45");
bam.style.backgroundColor = "green";