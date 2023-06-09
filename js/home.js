var colorThief = new ColorThief();


var images = [
    { src: "../img/bg/img1.png", meta: "A Brighter Summer Day (1991)", color: "#8B9F64", palette: [] },
    { src: "../img/bg/img2.png", meta: "To Live and Die in L.A. (1985)", color: "#81929D", palette: [] },
    { src: "../img/bg/img3.png", meta: "Bladerunner (1982)", color: "#2F5982", palette: [] },
    { src: "../img/bg/img4.png", meta: "The Master (2012)", color: "#857C82", palette: [] },
    { src: "../img/bg/img5.png", meta: "La Haine (1995)", color: "#3C3E3D", palette: [] },
    { src: "../img/bg/img6.png", meta: "There will be Blood (2007)", color: "#3C3E3D", palette: [] },
    { src: "../img/bg/img7.png", meta: "Days of Heaven (1978)", color: "#BFAA9E", palette: [] },
    { src: "../img/bg/img8.png", meta: "Ran (1985)", color: "#918E88", palette: [] },
    { src: "../img/bg/img9.png", meta: "Persona (1966)", color: "#4C4C4C", palette: [] },
    { src: "../img/bg/img10.png", meta: "YiYi (2000)", color: "#884A53", palette: [] },
    { src: "../img/bg/img11.png", meta: "Mission Impossible: Rogue Nation (2015)", color: "#7D9072", palette: [] },
    { src: "../img/bg/img12.png", meta: "Dunkirk (2017)", color: "#546865", palette: [] },
    { src: "../img/bg/img13.png", meta: "Phantom Thread (2017)", color: "", palette: [] },
    { src: "../img/bg/img14.png", meta: "Lost In Translation (2003)", color: "", palette: [] },
    { src: "../img/bg/img15.png", meta: "The Blues Brothers (1980)", color: "", palette: [] }
]

var currentIndex = Math.floor(Math.random() * images.length);

function cycleBackground() { //Function that cycles through the images (other than the first) and their color schemes
    currentIndex = (currentIndex + 1) % images.length


    document.body.style.backgroundImage = "url(" + images[currentIndex].src + ")";

    //generate palette for the current loaded image and change colors in the display.
    var image = new Image();
    image.src = images[currentIndex].src;
    image.addEventListener('load', function () { //when the image is loaded -> happens after the background image src is update (done above)
        cycleLogo();
        document.getElementById("text2").innerText = images[currentIndex].meta;
        cycleText();
        if (images[currentIndex].palette.length === 0) {
            console.log("palette generating");
            colorThief.getPalette(image, 7).forEach(function (color) {
                var rgb = "rgb(" + color.join(",") + ")";
                images[currentIndex].palette.push(rgb);
            });
        }
        //background color of titletext
        let titleTextElements = document.getElementsByClassName("titletext");
        Array.from(titleTextElements).forEach((element) => {
            element.style.backgroundColor = images[currentIndex].palette[2];
        });
        //displaying the palette
        var i = 0
        var colorSpans = document.querySelector("#palette").children;
        for (i = 0; i < colorSpans.length; i++) {
            colorSpans[i].style.backgroundColor = images[currentIndex].palette[i]
        }
    });
}
//Sets up the first time.
cycleBackground()
//Cycles background every 5 sec
// let intervalId = setInterval(cycleBackground,5000)
crawlWebsite()

document.addEventListener('click', function (event) {
    if (event.target.tagName == 'IMG') {
        clearInterval(intervalId)//stopping the old timer
        cycleBackground();
        intervalId = setInterval(cycleBackground, 5000); //starting a new timer
    }
});

function cycleLogo() {
    let logo1 = document.getElementById("logo1");
    let logo2 = document.getElementById("logo2")
    logo1.classList.add("translate");
    logo2.classList.add("translate");
}

logo1.addEventListener('transitionend', () => {
    logo1.classList.remove('translate');
    logo2.classList.remove('translate');
});

function cycleText() {
    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2")
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

