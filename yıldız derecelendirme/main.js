const stars=document.querySelectorAll(".stars i");

stars.forEach((star,index1)=>{
   star.addEventListener("click",()=>{// 2 forech döngüsündeki mantık : 2 indek tıklandığında diğer foreach sayıları döndürüp 2 .indekse eşit olana kadar active ekleme
       // console.log(index1);
       stars.forEach((star,index2)=>{
           index1>=index2 ? star.classList.add("active") : star.classList.remove("active");
       })
   }) ;
});















