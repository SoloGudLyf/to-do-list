import "./styles.css";
import { pageLoad } from "./home.js";
import { menuTab } from "./menu.js";
import { contactUs } from "./contact.js";
pageLoad();

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", pageLoad);

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", menuTab);

const contact = document.querySelector("#contact")
contact.addEventListener("click",contactUs)