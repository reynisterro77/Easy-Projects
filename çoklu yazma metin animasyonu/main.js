const text=document.querySelector(".sec-text");

const textLoad=()=>{
    //1s = 1milisaniye
    setTimeout(()=>{
        text.textContent="Full Stack Developer";
    },0);

    setTimeout(()=>{
        text.textContent="Operator";
    },4000);

    setTimeout(()=>{
        text.textContent="Freelancer";
    },8000);
}

textLoad();
setInterval(textLoad,12000);


























