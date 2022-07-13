const gmailOuTodas = document.querySelectorAll("#gmailTodas");
const googleApps = document.querySelector("#googleApps");
const apps = document.querySelector("#app");

window.addEventListener("load",() => {
    mudarTextHeader()
})

window.addEventListener("resize", () => {
    mudarTextHeader()
})

document.addEventListener("click", (e) => {
    verificarClick(e.target)
})

function verificarClick(elemento){
    console.log(elemento)
    if(elemento == googleApps)
    {
        if(apps.style.display == "block")
            apps.style.display = "none"
        else
            apps.style.display = "block";
    }
    else
        apps.style.display = "none";
}


function mudarTextHeader(){
    const menuIcon = document.querySelector("#menuIcon");
    const chrome = document.querySelector("#chrome");
    menuIcon.style.display = "none";
    let largura = window.innerWidth;

    if(largura <= 640)
    {
        gmailOuTodas[0].innerHTML = "Todas";
        gmailOuTodas[0].classList.add("underline");
        menuIcon.style.display = "block";
        chrome.style.display = "none"
    }
    else
    {
        gmailOuTodas[0].innerHTML = "Gmail";
        gmailOuTodas[0].classList.remove("underline");
        chrome.style.display = "block"
    }
}