import _ from "lodash";
import moment from "moment";
import "./scss/main.scss";

function component() {
  var element = document.createElement("div");
  element.innerHTML = Random;
  return element;
}

function getDate() {
  var element = document.createElement("div");
  element.innerHTML = moment().format("MM/DD/YYYY");
  console.log("Hello pussy");
  console.log(`Hello from ${moment().format("MM/DD/YYYY")}`);

  return element;
}

document.body.appendChild(component());
document.body.appendChild(getDate());
