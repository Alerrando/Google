const gmailOuTodas = document.querySelectorAll("#gmailTodas");
const googleApps = document.querySelector("#googleApps");
const apps = document.querySelector("#app");
const menuIcon = document.querySelector("#menuIcon");
const menu = document.querySelector("#menu");
const tema = document.querySelector("#tema");
const footer = document.querySelector("footer");

window.addEventListener("load",() => {
    mudarTextHeader()
})

window.addEventListener("resize", () => {
    mudarTextHeader()
})

document.addEventListener("click", (e) => {
    verificarClick(e.target)
})

tema.addEventListener("click", () => {
    mudarTema()
})

function mudarTema(){
    const temaDarkWhite = document.querySelector("#whiteDark");
    const inputB = document.querySelectorAll("#inputBotao");
    const barras = document.querySelectorAll("#barra")

    document.body.style.backgroundColor = menu.style.backgroundColor = "#202124";
    document.body.style.color = menu.style.color = "#fff"
    inputB[0].style.backgroundColor = inputB[1].style.backgroundColor = "#303134"
    footer.style.backgroundColor = "#121212"
    barras[0].style.backgroundColor = barras[1].style.backgroundColor ="#bdc1c6"

    if(temaDarkWhite.innerHTML == "Ativado")
        temaDarkWhite.innerHTML = "Desativado"
    else
        temaDarkWhite.innerHTML = "Ativado"
}

function verificarClick(elemento){
    const header = document.querySelector("header");
    const main = document.querySelector("main");

    if(elemento == googleApps)
        googleAppsClick()
    else
        apps.style.display = "none";

    if(elemento == menuIcon)
        menuClick(header, main, footer);
    else
    {
        menu.style.right = "28rem";
        header.style.opacity = main.style.opacity = footer.style.opacity = "1"
    }
}

function googleAppsClick(){
    if(apps.style.display == "block")
        apps.style.display = "none"
    else
        apps.style.display = "block";
}

function menuClick(header, main, footer){
    if(menu.style.right == "28rem" || menu.style.right == "")
    {
        menu.style.right = "11rem";
        menu.style.transition = "all 0.5s";
        menu.style.opacity = "1"
        header.style.opacity = main.style.opacity = footer.style.opacity = "0.3";
    }
}

function mudarTextHeader(){
    const chrome = document.querySelector("#chrome");
    let largura = window.innerWidth;

    if(largura <= 640)
    {
        gmailOuTodas[0].innerHTML = "Todas";
        gmailOuTodas[0].classList.add("underline");
        chrome.style.display = "none"
    }
    else
    {
        gmailOuTodas[0].innerHTML = "Gmail";
        gmailOuTodas[0].classList.remove("underline");
        chrome.style.display = "block"
    }
}