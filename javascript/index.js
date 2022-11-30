/**
 * This code sets up event listeners on the page, and uses them to
 * run and display different mathematical functions
 */

import {seventySixersProbability} from "./modules/sevensixer.js";

window.addEventListener('load', init );

function init() {
    let seventySixersForm = document.getElementById('seventysixersform');
    seventySixersForm.addEventListener('submit', seventySixers);
}

function seventySixers(event) {
    event.preventDefault();
    let numberDiceElement = document.getElementById('seventysixersdice');
    let probabilityWinningElement = document.getElementById('seventysixersprobability');
    let probabilityWinning = seventySixersProbability(Number(numberDiceElement.value));
    probabilityWinningElement.value = probabilityWinning;
}