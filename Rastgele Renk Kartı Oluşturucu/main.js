const container=document.querySelector(".container");
const refreshBtn=document.querySelector(".refresh-btn");

const maxPaletteBoxes=32;

const generatePalette=()=>{
    container.innerHTML="";//containerdaki li leri silme
    for (let i=0;i<maxPaletteBoxes;i++){
        //rastegele hex kodu üretme
        let randomHex=Math.floor(Math.random()*0xffffff).toString(16);
        randomHex=`#${randomHex.padStart(6,"0")}`;

        //li üretme
        const color=document.createElement("li");
        color.classList.add("color");
        color.innerHTML=`<div class="rect-box" style="background: ${randomHex}"></div>
                        <span class="hex-value">${randomHex}</span>`;

        //kopyalama işlemi için addEventListener
        color.addEventListener("click",()=>copyColor(color,randomHex));
        container.appendChild(color);
    }

}

generatePalette();

copyColor=(elem,hexVal)=>{//kopyalama işlemi
    const colorElement=elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerHTML="Kopyalandı";
        //kopyalandıktan sonra kopyalandı yazısını belli bir süre sonra kaldırma
        setTimeout(()=>colorElement.innerHTML=hexVal,1000);
    }).catch(()=>{
        alert("Renk kodu kopyalaması hatalı");
    })
}
refreshBtn.addEventListener("click",generatePalette);



















