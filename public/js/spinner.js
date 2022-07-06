window.addEventListener("DOMContentLoaded", (e) => {
    console.log('estoy conectado');
    setTimeout(() => {
      document.querySelector(".spinner").style.display = "none";
      document.querySelector(".content").style.display = "inline-block";  
    }, 5000);

    
})