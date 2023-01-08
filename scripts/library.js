const searchGameInput = document.getElementById('searchGame');
const scrapSearchIcon = document.getElementById('scrapSearchIcon');
const gameImg = document.getElementById("GameMenuImg");
const gameLogo = document.getElementById("GameMenuLogo");
var activeButton = "10";
/* const popupblur = document.getElementById("popupblur");
const popup = document.getElementById("popup"); */

var isXEnabeled = false;

scrapSearchIcon.style.visibility = "hidden";

function findGame(game) {
    switch(game) {
        case 10:
            gameImg.src = "assets/gameImages/10_library_hero.jpg";
            gameLogo.src = "assets/gameImages/10_logo.png";
            break;
        case 70:
            gameImg.src = "assets/gameImages/70_library_hero.jpg";
            gameLogo.src = "assets/gameImages/70_logo.png";
            break;
        default:
        
      }
      setActiveButton(game);
}

function setActiveButton(active) {
    document.getElementById(active).className = "GameSelected";
    document.getElementById(activeButton).className = "Game";
    activeButton = active;
}
searchGameInput.addEventListener('input',  event => {
    var searchvar = searchGameInput.value
    if (searchvar === "") {
        var isXEnabeled = false;
        scrapSearchIcon.style.visibility = "hidden";
    } else {
        if(isXEnabeled === false){
            var isXEnabeled = true;
            scrapSearchIcon.style.visibility = "visible";
            alert(isXEnabeled);
        }
    }
    alert(["this has not been added yet lol come back later", searchvar, "<--"]);
});

/* function ContinueToWebsite() {
    popup.style.visibility = "hidden"
    popupblur.style.visibility = "hidden"
    popup.remove()
    popupblur.remove()
} */