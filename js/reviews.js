function cycleLogo() {
  let logo1=document.getElementById("logo1");
  let logo2=document.getElementById("logo2")
  logo1.classList.add("translate");
  logo2.classList.add("translate");
}
logo1.addEventListener('transitionend', () => {
  logo1.classList.remove('translate');
  logo2.classList.remove('translate');
});

