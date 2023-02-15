const notifications=document.querySelector(".notifications"),
buttons=document.querySelectorAll(".buttons .btn");

const toastDetails={
    timer:5000,
    success:{
        icon:'fa-circle-check',
        text:'İşlem Başarılı',
    },
    error:{
        icon:'fa-circle-xmark',
        text:'İşlem Başarısız',
    },
    warning:{
        icon:'fa-triangle-exclamation',
        text:'Hata',
    },
    info:{
        icon:'fa-circle-info',
        text:'Bilgi',
    },
}

const removeToast=(toast)=>{
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId);//zaman dolduğunda yada  notification daki çarpıya tıkladığında ul içi temizlenmesi için kullandım
    setTimeout(()=>toast.remove(),500);//yanda çıkan notification daki çarpıya tıklama eventi tetiklendimi yarım saniye bekleme yapıyorum
}

const createToast=(id)=>{
    // console.log(id);
    const {icon,text}=toastDetails[id];
    const toast=document.createElement("li");
    toast.className=`toast ${id}`;
    toast.innerHTML=`
            <div class="column">
            <i class="fa-solid ${icon}"></i>
            <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
    `;
    notifications.appendChild(toast);
    toast.timeoutId=setTimeout(()=>removeToast(toast),toastDetails.timer);
}

buttons.forEach(btn=>{//buttonları for ile döndürüp
    // console.log(btn);
    btn.addEventListener("click",()=>createToast(btn.id));//hangi buttona tıklandıysa fonksiyonla bu parametreyi alıcam
});



























