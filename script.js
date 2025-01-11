function movePopup() {
    var popup = document.getElementById("popup");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let popupWidth = popup.offsetWidth;
    let popupHeight = popup.offsetHeight;

    var x = Math.floor(Math.random() * (windowWidth - popupWidth));
    var y = Math.floor(Math.random() * (windowHeight - popupHeight));

    popup.style.position = "absolute";
    popup.style.left = x + "px";
    popup.style.top = y + "px";
}

function redirecionar() {
    window.location.href = "accepted.html";
}