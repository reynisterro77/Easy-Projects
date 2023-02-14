const popup=document.querySelector(".popup"),
    wifiIcon=document.querySelector(".icon i"),
    popupTitle=document.querySelector(".popup .title"),
    popupDesc=document.querySelector(".desc"),
    reconnectBtn=document.querySelector(".reconnect");

let isOnline=true,intervalId,timer=10;

const checkConnection=async ()=>{
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/posts");
        // console.log(response)
        isOnline=response.status >= 200 && response.status < 300;
    }catch (error){
        // console.log(error)
        isOnline=false;//eğer hata varsa veri yok demekki internet yok
    }

    // console.log(isOnline);
    timer=10;
    clearInterval(intervalId);
    handlePopup(isOnline);
}

const handlePopup=(status)=>{
    if (status){
        wifiIcon.className="uil uil-wifi";
        popupTitle.innerText="Yeniden Kurulan Bağlantı";
        popupDesc.innerHTML="Cihazınız İnternete Başarıyla Bağlandı";
        popup.classList.add("online");
        // return popup.classList.remove("show");
        return setTimeout(()=> popup.classList.remove("show") , 2000);
    }
     popup.classList.add("show");
    wifiIcon.className="uil uil-wifi-slash";
    popupTitle.innerText="Bağlantı Yok";
    popupDesc.innerHTML="Ağınız kullanılamıyor. Sizi <b>10</b> saniye içinde yeniden bağlamaya çalışacağız.";
    popup.className="popup show";

    intervalId=setInterval(()=>{//geriye saniye sayacı başlatma
        timer--;
        if (timer===0) checkConnection();//eğer sayaç sıfır oldumu tekrardan apiyi yeniler
        popup.querySelector(".desc b").innerText=timer;
    },1000);
}

// setInterval(checkConnection,3000);
//isOnline true yani bağlantı başarılı olduğunda çalıştır
setInterval(()=>isOnline && checkConnection(),3000);

reconnectBtn.addEventListener("click",checkConnection);











