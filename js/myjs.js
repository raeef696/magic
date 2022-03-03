const nav = document.querySelector('nav');

     window.addEventListener('scroll', () => {
         if (window.scrollY >=60) {
             nav.classList.add('active_nav');
         } else {
             nav.classList.remove('active_nav');
         }
     });

     const abouta=document.getElementById('abouta2');
     const processa=document.getElementById('processa2');
     const about=document.getElementById('about2');
     const process=document.getElementById('process2');
     abouta.addEventListener("click",function(){
       if(about.style.display==="none"){
         about.style.display==="block";
       }else{
         about.style.display==="none";
       }

     });
     processa.addEventListener("click",function(){
       if(process.style.display==="none"){
         process.style.display==="block";
       }else{
         process.style.display==="none"
       }
     });
