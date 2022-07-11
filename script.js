const gmailOuTodas = document.querySelectorAll("#gmailTodas");
const googleApps = document.querySelector("#googleApps");

window.addEventListener("load",() => {
    mudarTextHeader()
})

window.addEventListener("resize", () => {
    mudarTextHeader()
})

googleApps.addEventListener("click", () => {
    const apps = document.querySelector("#app");

    if(apps.style.display == "block")
        apps.style.display = "none"
    else
        apps.style.display = "block";
})

function mudarTextHeader(){
    const menuIcon = document.querySelector("#menuIcon");
    const chrome = document.querySelector("#chrome");

    let largura = window.innerWidth;

    if(largura <= 640)
    {
        gmailOuTodas[0].innerHTML = "Todas";
        gmailOuTodas[0].classList.add("underline");
        menuIcon.style.display = "block"
        chrome.style.display = "none"
    }
    else
    {
        gmailOuTodas[0].innerHTML = "Gmail";
        gmailOuTodas[0].classList.remove("underline");
        menuIcon.style.display = "none";
        chrome.style.display = "block"
    }
}