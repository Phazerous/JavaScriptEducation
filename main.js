let header = document.querySelector("h1");
let button = document.querySelector(".goto-button");

let vk_button = document.querySelector("#vk");
let yt_button = document.querySelector("#yt");
let inst_button = document.querySelector("#inst");

vk_button.onclick = function() {
    header.innerHTML = "Vk";
    button.setAttribute("href", "https://vk.com")
}

yt_button.onclick = function() {
    header.innerHTML = "YouTube"
    button.setAttribute("href", "https://www.youtube.com/")
}

inst_button.onclick = function() {
    header.innerHTML = "Instagram"
    button.setAttribute("href", "https://www.instagram.com/")
}