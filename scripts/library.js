const searchGameInput = document.getElementById('searchGame');
const scrapSearchIcon = document.getElementById('scrapSearchIcon');
var isXEnabeled = false

scrapSearchIcon.style.visibility = "hidden"
alert("gay")

function findGame(game) {
    alert(["game index: ", game])
}

searchGameInput.addEventListener('input',  event => {
    var searchvar = searchGameInput.value
    if (searchvar === "") {
        var isXEnabeled = false
        scrapSearchIcon.style.visibility = "hidden"
    } else {
        if(isXEnabeled === false){
            var isXEnabeled = true
            scrapSearchIcon.style.visibility = "visible"
            alert(isXEnabeled)
        }
    }
    alert(["this has not been added yet lol come back later", searchvar, "<--"])
});