var colorThief = new ColorThief();

var images = [
    {src: "img/bg/img1.png", meta: "A Brighter Summer Day (1991)", color: "#8B9F64", palette: []},
    {src: "img/bg/img2.png", meta: "To Live and Die in L.A. (1985)", color: "#81929D", palette: []},
    {src: "img/bg/img3.png", meta: "Bladerunner (1982)", color: "#2F5982", palette: []},
    {src: "img/bg/img4.png", meta: "The Master (2012)", color: "#857C82", palette: []},
    {src: "img/bg/img5.png", meta: "La Haine (1995)", color: "#3C3E3D", palette: []},
    {src: "img/bg/img6.png", meta: "There will be Blood (2007)", color: "#3C3E3D", palette: []},
    {src: "img/bg/img7.png", meta: "Days of Heaven (1978)", color: "#BFAA9E", palette: []},
    {src: "img/bg/img8.png", meta: "Ran (1985)", color: "#918E88", palette: []},
    {src: "img/bg/img9.png", meta: "Persona (1966)", color: "#4C4C4C", palette: []},
    {src: "img/bg/img10.png", meta: "YiYi (2000)", color: "#884A53", palette: []},
    {src: "img/bg/img11.png", meta: "Mission Impossible: Rogue Nation (2015)", color: "#7D9072", palette: []},
    {src: "img/bg/img12.png", meta: "Dunkirk (2017)", color: "#546865", palette: []},
]
window.onload = function() {
    images.forEach(function(image) {
        var img = new Image();
        img.addEventListener('load', function() {
            colorThief.getPalette(img, 7).forEach(function(color) {
                var rgb = "rgb(" + color.join(",") + ")";
                image.palette.push(rgb);
            });
          });
        img.src = image.src;
      });
    document.body.style.backgroundImage = "url('https://example.com/background-image.jpg')";
};
var currentIndex=0;

function cycleBackground() {
    currentIndex = (currentIndex+1)%images.length
    document.body.style.backgroundImage = "url("+images[currentIndex].src+")";
    document.getElementById("image-meta").innerText = images[currentIndex].meta;

    const titleTextElements = document.getElementsByClassName("titletext");
    Array.from(titleTextElements).forEach((element) => {
    element.style.backgroundColor = images[currentIndex].palette[6];
    // element.style.backgroundColor = images[currentIndex].color;
    });

    var i=0
    var colorSpans = document.querySelector("#palette").children;
    for (i=0;i<colorSpans.length;i++){
        colorSpans[i].style.backgroundColor = images[currentIndex].palette[i]
    }

    console.log(currentIndex)
}
setInterval(cycleBackground,5000)