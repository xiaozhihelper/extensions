console.log("popup")

const CLOSED = 'CLOSED'
const OPEN = 'OPEN'
const CLASH = 'CLASH'

const backgroundPage = chrome.extension.getBackgroundPage();
const stopBtn = document.getElementById("stopVpn");
const openBtn = document.getElementById("openVpn");
const disabledBtn = document.getElementById("disabledBtn");

function updateStatus() {
    backgroundPage.getVpnStatus((status) => {
        if (status === CLASH) {
            document.getElementById("clash").style.display = "block";
        }
        document.getElementById("status").innerHTML = status
        if (status === OPEN) {
            stopBtn.style.display = "block";
            disabledBtn.style.display = "none";
            openBtn.style.display = "none";
        } else {
            stopBtn.style.display = "none";
            disabledBtn.style.display = "none";
            openBtn.style.display = "block";
        }
    })
}


function bindEvents() {
    stopBtn.onclick = function () {
        backgroundPage.stopVpn(() => {
            updateStatus();
        })
    }
    openBtn.onclick = function () {
        openBtn.style.display = "none";
        stopBtn.style.display = "none";
        disabledBtn.style.display = "block"
        backgroundPage.startVpn(() => {
            updateStatus();
            document.getElementById("clash").style.display = "none";

        })
    }
}

bindEvents();
updateStatus();
