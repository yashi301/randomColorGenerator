let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let randomColor = getrandomColor();
    let h1=document.querySelector("h1");
    h1.innerText=randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("color  updated");
});
function getrandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
   
    return color;
};
