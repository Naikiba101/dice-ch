var random1 = Math.floor(Math.random()*6) + 1;

var randomDiceImg = "dice" + random1 + ".png";

var randomImgSource = "img/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSource);

var random2 = Math.floor(Math.random()*6) + 1;

var randomDiceImg2 = "dice" + random2 + ".png";

var randomImgSource2 = "img/" + randomDiceImg2 ;

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2); 


if(random1 > random2){
    document.querySelector("h1").innerHTML = " Player 1 Wins!";
}
else if(random1 < random2){
    document.querySelector("h1").innerHTML = " Player 2 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}