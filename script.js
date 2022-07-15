const gmailOuTodas = document.querySelectorAll("#gmailTodas");
const googleApps = document.querySelector("#googleApps");
const apps = document.querySelector("#app");
const menuIcon = document.querySelector("#menuIcon");
const menu = document.querySelector("#menu");
const tema = document.querySelectorAll("#tema");
const footer = document.querySelector("footer");
const conf = document.querySelector("#configMenu")
const menuConfig = document.querySelector("#menuConfig");

window.addEventListener("load",() => {
    mudarTextHeader()
})

window.addEventListener("resize", () => {
    mudarTextHeader()
})

document.addEventListener("click", (e) => {
    verificarClick(e.target)
})

for (let index = 0; index < tema.length; index++) {
    tema[index].addEventListener("click", () => {
        mudarTema()
    })
}

function mudarTema(){
    const temaDarkWhite = document.querySelectorAll("#whiteDark");
    const inputB = document.querySelectorAll("#inputBotao");
    const barras = document.querySelectorAll("#barra")

    for (let index = 0; index < temaDarkWhite.length; index++) {
        if(temaDarkWhite[index].innerHTML == "Ativado")
        {
            temaDarkWhite[index].innerHTML = "Desativado"
            document.body.style.backgroundColor = menu.style.backgroundColor= menuConfig.style.backgroundColor = "#fff";
            document.body.style.color = menu.style.color = "#484848"
            inputB[0].style.backgroundColor = inputB[1].style.backgroundColor = footer.style.backgroundColor = "#f2f2f2"
            menuConfig.style.color = "#000";
            barras[0].style.opacity = barras[1].style.opacity = "0.30"
        }
        else
        {
            temaDarkWhite[index].innerHTML = "Ativado"
            document.body.style.backgroundColor = menu.style.backgroundColor= menuConfig.style.backgroundColor = "#202124";
            document.body.style.color = menu.style.color = menuConfig.color = "#fff"
            inputB[0].style.backgroundColor = inputB[1].style.backgroundColor = "#303134"
            footer.style.backgroundColor = "#121212"
        }
        
    }
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
        menu.style.left = "28rem";
        header.style.opacity = main.style.opacity = footer.style.opacity = "1"
    }

    if(elemento == conf)
        menuConfigClick()
    else
        menuConfig.style.display = "none"
}

function menuConfigClick(){
    if(menuConfig.style.display == "block")
        menuConfig.style.display = "none"
    else
        menuConfig.style.display = "block"
}

function googleAppsClick(){
    if(apps.style.display == "block")
        apps.style.display = "none"
    else
        apps.style.display = "block";
}

function menuClick(header, main, footer){
    if(menu.style.left == "28rem" || menu.style.left == "")
    {
        menu.style.left = "0";
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