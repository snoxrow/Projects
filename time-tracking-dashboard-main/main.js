import data from "./data.json" assert { type: "json" };
// find focused element
let isFocused = document.activeElement;
// timeframes
let daily = "daily";
let weekly = "weekly";
let monthly = "monthly";
// let weekly = document.getElementById("weekly");
// let monthly = document.getElementById("monthly");
let timeOption = document.querySelectorAll(".time-option");
let selected = daily;

// cards

let cardTitle = document.querySelectorAll(".title");
let cardHours = document.querySelectorAll(".mid-section");
let lastTimeframe = document.querySelectorAll(".bot-section");
let background = document.querySelectorAll(".background-svg");
let svg = document.querySelectorAll("svg");
function runOnStart() {
  timeFrame();
}
if(document.readyState !== 'loading') {
  runOnStart();
}
else {
  document.addEventListener('DOMContentLoaded', function () {
      runOnStart()
  });
}
// document.addEventListener("DOMContentLoaded", () => {
//   timeFrame();})
cardTitle.forEach(changeTitle);
background.forEach(backgroundColor);
// preventDefault(daily);

function changeSelected(id) {
  selected = id;
}
function changeTitle(element, index) {
  element.innerHTML = data[index].title;
}

function backgroundColor(element, index) {
  let color = element.style;
  switch (index) {
    case 0:
      color.backgroundColor = "hsl(15, 100%, 70%)";
      break;

    case 1:
      color.backgroundColor = "hsl(195, 74%, 62%)";
      break;

    case 2:
      color.backgroundColor = "hsl(348, 100%, 68%)";
      break;

    case 3:
      color.backgroundColor = "hsl(145, 58%, 55%)";
      break;

    case 4:
      color.backgroundColor = "hsl(264, 64%, 52%)";
      break;

    case 5:
      color.backgroundColor = "hsl(43, 84%, 65%)";
      break;
  }
}
timeOption.forEach((element) => {
  element.addEventListener("click", () => {
    changeSelected(element.id);
    timeFrame();
  });
});

function timeFrame() {
  if (selected === daily) {
    cardHours.forEach((element, index) => {
      element.innerHTML = data[index].timeframes.daily.current + "hrs";
    });
    lastTimeframe.forEach((element, index) => {
      element.innerHTML =
        "Last Week -" + " " + data[index].timeframes.daily.previous + "hrs";
    });
  } else if (selected === weekly) {
    cardHours.forEach((element, index) => {
      element.innerHTML = data[index].timeframes.weekly.current + "hrs";
    });
    lastTimeframe.forEach((element, index) => {
      element.innerHTML =
        "Last Week -" + " " + data[index].timeframes.weekly.previous + "hrs";
    });
  } else {
    cardHours.forEach((element, index) => {
      element.innerHTML = data[index].timeframes.monthly.current + "hrs";
    });
    lastTimeframe.forEach((element, index) => {
      element.innerHTML =
        "Last Week -" + " " + data[index].timeframes.monthly.previous + "hrs";
    });
  }
}

// function preventDefault(e) {
//   if (isFocused === daily || isFocused === monthly || isFocused === weekly) {
//     e.preventDefault
//   }
// }
