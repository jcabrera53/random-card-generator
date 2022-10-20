/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let symbol = ["♥", "♦", "♣", "♠"];

  let randomNumber = number[Math.floor(Math.random() * number.length)];
  let randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];

  document.getElementsByClassName("up-left")[0].innerHTML =
    randomNumber + "<br>" + randomSymbol;
  document.getElementsByClassName("medium")[0].innerHTML = randomSymbol;
  document.getElementsByClassName("bottom-right")[0].innerHTML =
    randomNumber + "<br>" + randomSymbol;

  if (randomSymbol == "♥" || randomSymbol == "♦") {
    document.getElementsByClassName("up-left")[0].style.color = "red";
    document.getElementsByClassName("medium")[0].style.color = "red";
    document.getElementsByClassName("bottom-right")[0].style.color = "red";
  }
};
