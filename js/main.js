// global var //

const colorGray = "#D9D9D9";

window.addEventListener("load",function(event){

    document.querySelector(".pkmnapp-btn--water").addEventListener("click", waterMode);
    document.querySelector(".pkmnapp-btn--fire").addEventListener("click", fireMode);
    document.querySelector(".pkmnapp-btn--grass").addEventListener("click", grassMode);

});

// water mode // 

const waterMode = () => {

    document.querySelector("body").style.backgroundColor = "#3BA7F4"
    document.querySelector(".pkmnapp-btn--water").style.backgroundColor = "#89FFEA"
    document.querySelector(".pkmnapp-section-main-pkmn--water").style.backgroundColor = "#00969F"
    if (document.querySelector(".pkmnapp-btn--fire").style.backgroundColor = "#FFA826"){
        document.querySelector(".pkmnapp-btn--fire").style.backgroundColor = colorGray
    }

    if (document.querySelector(".pkmnapp-section-main-pkmn--fire").style.backgroundColor = "#FF0D0D") {
        document.querySelector(".pkmnapp-section-main-pkmn--fire").style.backgroundColor = colorGray
    }

    if (document.querySelector(".pkmnapp-btn--grass").style.backgroundColor = "#5BCB27") {
        document.querySelector(".pkmnapp-btn--grass").style.backgroundColor = colorGray
    }

    if (document.querySelector(".pkmnapp-section-main-pkmn--grass").style.backgroundColor = "#35A600") {
        document.querySelector(".pkmnapp-section-main-pkmn--grass").style.backgroundColor = colorGray
    }

}


// fire mode //

const fireMode = () => {

    document.querySelector("body").style.backgroundColor = "#FF5F2D"
    document.querySelector(".pkmnapp-btn--fire").style.backgroundColor = "#FFA826"
    document.querySelector(".pkmnapp-section-main-pkmn--fire").style.backgroundColor = "#FF0D0D"

    if (document.querySelector(".pkmnapp-btn--water").style.backgroundColor = "#89FFEA"){
        document.querySelector(".pkmnapp-btn--water").style.backgroundColor = colorGray
    }

    if (document.querySelector(".pkmnapp-section-main-pkmn--water").style.backgroundColor = "#00969F") {
        document.querySelector(".pkmnapp-section-main-pkmn--water").style.backgroundColor = colorGray
    }

    if (document.querySelector(".pkmnapp-btn--grass").style.backgroundColor = "#5BCB27") {
        document.querySelector(".pkmnapp-btn--grass").style.backgroundColor = colorGray
    }

    if (document.querySelector(".pkmnapp-section-main-pkmn--grass").style.backgroundColor = "#35A600") {
        document.querySelector(".pkmnapp-section-main-pkmn--grass").style.backgroundColor = colorGray
    }

}


// grass mode //

const grassMode = () => {

    document.querySelector("body").style.backgroundColor = "#B8FF9F"
    document.querySelector(".pkmnapp-btn--grass").style.backgroundColor = "#5BCB27"
    document.querySelector(".pkmnapp-section-main-pkmn--grass").style.backgroundColor = "#35A600"

    if (document.querySelector(".pkmnapp-btn--water").style.backgroundColor = "#89FFEA"){
        document.querySelector(".pkmnapp-btn--water").style.backgroundColor = colorGray
    }

    if (document.querySelector(".pkmnapp-section-main-pkmn--water").style.backgroundColor = "#00969F") {
        document.querySelector(".pkmnapp-section-main-pkmn--water").style.backgroundColor = colorGray
    }

    if (document.querySelector(".pkmnapp-btn--fire").style.backgroundColor = "#FFA826") {
        document.querySelector(".pkmnapp-btn--fire").style.backgroundColor = colorGray
    }

    if (document.querySelector(".pkmnapp-section-main-pkmn--fire").style.backgroundColor = "#FF0D0D") {
        document.querySelector(".pkmnapp-section-main-pkmn--fire").style.backgroundColor = colorGray
    }


}
