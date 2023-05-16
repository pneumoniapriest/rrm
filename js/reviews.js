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

function cycleText() {
  let text1=document.getElementById("text1");
  let text2=document.getElementById("text2")
  text1.classList.add("translate");
  text2.classList.add("translate");
}
text1.addEventListener('transitionend', () => {
  temp = document.getElementById("text1").textContent;
  document.getElementById("text1").textContent = document.getElementById("text2").textContent;
  document.getElementById("text2").textContent = temp;
  text1.classList.remove('translate');
  text2.classList.remove('translate');
});
