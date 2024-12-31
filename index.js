
let voice= new Audio("audio/celebration.mp3");
let year = document.getElementsByTagName('span');
let imgpart2 = document.getElementsByClassName('imgpart2')[0];

setTimeout(function removeimgpart2andshowimgpart1() {
    imgpart2.style.display = "none";
    document.getElementsByClassName('img1')[0].style.display = "inline"
    document.getElementsByClassName('img2')[0].style.display = "inline"
    document.getElementsByClassName('img3')[0].style.display = "inline"
    document.getElementsByClassName('img4')[0].style.display = "inline"
}, 5000

)


setTimeout(function removeimgpart1() {
    document.getElementsByClassName('img1')[0].style.display = "none"
    document.getElementsByClassName('img2')[0].style.display = "none"
    document.getElementsByClassName('img3')[0].style.display = "none"
    document.getElementsByClassName('img4')[0].style.display = "none"

}, 15000)

let hdyear = function hideyear() {
    year[0].style.visibility = "hidden";
    year[1].style.visibility = "hidden";
    year[2].style.visibility = "hidden";

    year[3].style.visibility = "hidden";

}


setTimeout(hdyear, 10000);

let styear = function setyear() {

    year[3].innerText = 5;
}

setTimeout(styear, 11000);

let swyear = function showYear() {
    for (let i = 0; i < year.length; i++) {
        year[i].style.background = "linear-gradient(45deg,red,blue,orange,rgb(56, 1, 10))"
        year[i].style.backgroundClip = "text";
        year[i].style.backgroundPosition = "center center";
        year[i].style.webkitBackgroundClip = "text";
        year[i].style.color = "transparent";
        year[i].style.visibility = "visible";
        year[i].style.animation = "showsmoothly 3s ease-in-out 0s";
    }



}

setTimeout(swyear, 11000); 
setTimeout(()=>{
    $('body').fireworks();
    voice.play();

},12000)


