var colorThief = new ColorThief();

var images = [
    {src: "assets/img1.png", meta: "A Brighter Summer Day (1991)", color: "#8B9F64", palette: []},
    {src: "assets/img2.png", meta: "To Live and Die in L.A. (1985)", color: "#81929D", palette: []},
    {src: "assets/img3.png", meta: "Bladerunner (1982)", color: "#2F5982", palette: []},
    {src: "assets/img4.png", meta: "The Master (2012)", color: "#857C82", palette: []},
    {src: "assets/img5.png", meta: "La Haine (1995)", color: "#3C3E3D", palette: []},
    {src: "assets/img6.png", meta: "There will be Blood (2007)", color: "#3C3E3D", palette: []},
    {src: "assets/img7.png", meta: "Days of Heaven (1978)", color: "#BFAA9E", palette: []},
    {src: "assets/img8.png", meta: "Ran (1985)", color: "#918E88", palette: []},
    {src: "assets/img9.png", meta: "Persona (1966)", color: "#4C4C4C", palette: []},
    {src: "assets/img10.png", meta: "YiYi (2000)", color: "#884A53", palette: []},
    {src: "assets/img11.png", meta: "Mission Impossible: Rogue Nation (2015)", color: "#7D9072", palette: []},
    {src: "assets/img12.png", meta: "Dunkirk (2017)", color: "#546865", palette: []},
]
var currentIndex=0;
images.forEach(function(image) {
    var img = new Image();
    img.addEventListener('load', function() {
        console.log(img.src);
        colorThief.getPalette(img, 7).forEach(function(color) {
            var rgb = "rgb(" + color.join(",") + ")";
            image.palette.push(rgb);
        });
        console.log(image.color)
        console.log(image.palette)
      });
    img.src = image.src;
  });

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