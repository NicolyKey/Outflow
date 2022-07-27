const close = document.querySelector(".close-pop");
const pop = document.querySelector(".popup");
const cadastro = document.querySelector(".cadastro");


// tela direcionadora de cadastro
cadastro.addEventListener("click", () =>{
  pop.classList.add("active");
})


close.addEventListener("click", () =>{
  pop.classList.remove("active");
})
