const carousel=document.querySelector(".carousel"),
    firstImg=carousel.querySelectorAll("img")[0];
    arrowIcons=document.querySelectorAll(".wrapper i");

let isDragStart=false,isDragging=false,prevPageX,prevScrollLeft,positionDiff;

const showHideIcons=()=>{
    //karusel sola kaydırma değerine göre önceki/sonraki simgesini gösterme ve gizleme
    let scrollWidht=carousel.scrollWidth-carousel.clientWidth;//maksimum kaydırılabilir genişlik elde etme
    arrowIcons[0].style.display=carousel.scrollLeft==0 ? "none":"block";
    arrowIcons[1].style.display=carousel.scrollLeft==scrollWidht ? "none":"block";
}

arrowIcons.forEach(icon=>{
    icon.addEventListener("click",()=>{
        let firstImgWidht=firstImg.clientWidth+14;//ilk img genişliğini alma ve 14 kenar boşluğu ekleme

        carousel.scrollLeft += icon.id == "left"? -firstImgWidht:firstImgWidht;
        setTimeout(()=>showHideIcons(),60);
    });
})

const autoSlide=()=>{
    //kaydırılacak görüntü kalmadıysa buradan geri dönün
    if (carousel.scrollLeft==(carousel.scrollWidth-carousel.clientWidth)) return ;

    // console.log(positionDiff)
    positionDiff=Math.abs(positionDiff);//positionDiff değerini pozitif yapma
    let firstImgWidht=firstImg.clientWidth+14;

    //imgyi merkez yapmak için carousel solundan eklenmesi veya azaltılması gereken fark değerini alma
    let valDifference=firstImgWidht-positionDiff;
    if (carousel.scrollLeft>prevScrollLeft){//kullanıcı sağa kaydırıyorsa
        return carousel.scrollLeft += positionDiff > firstImgWidht / 3 ? valDifference:positionDiff;
    }
    ////kullanıcı sola kaydırıyorsa
    carousel.scrollLeft -= positionDiff > firstImgWidht / 3 ? valDifference:positionDiff;
}


const dragStart=(e)=>{
    //fare aşağı olayında global veri değerinin güncellenmesi
    isDragStart=true;
    prevPageX=e.pageX || e.touches[0].pageX;
    prevScrollLeft=carousel.scrollLeft;
}

const dragging=(e)=>{
    if (!isDragStart) return;
    e.preventDefault();
    isDragging=true;
    carousel.classList.add("dragging");
    positionDiff=(e.pageX || e.touches[0].pageX)-prevPageX;
    carousel.scrollLeft=prevScrollLeft-positionDiff;
    showHideIcons();
}

const dragStop=()=>{
    isDragStart=false;
    carousel.classList.remove("dragging");
    if (!isDragging) return;
    isDragging=false;
    autoSlide();
}

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("touchstart",dragStart);


carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("touchmove",dragging);


carousel.addEventListener("mouseup",dragStop);


carousel.addEventListener("mouseleave",dragStop);
carousel.addEventListener("touchend",dragStop);








































