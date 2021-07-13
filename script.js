//JS for lightmode
let lightMode = localStorage.getItem("lightMode");
const lightModeToggle = document.querySelector("#light-mode");

function enableLightMode() {
    //1. Add light mode to the body.
    document.body.classList.add("lightmode");
    //2. Update LightMode in LocalStorage.
    localStorage.setItem("lightMode", "enabled");
};


function disableLightMode() {
    //1. Remove light mode from body.
    document.body.classList.remove("lightmode");
    //2. Update LightMode in LocalStorage.
    localStorage.setItem("lightMode", null);
};

if (lightMode === "enabled") {
    enableLightMode();
};


function toggleLightMode() {
    lightMode = localStorage.getItem("lightMode");
    if (lightMode !== "enabled") {
        enableLightMode();
    } else {
        disableLightMode();
    }
}

//JS for the tabs:
function openSection(evt, sectionName) {
    //Declare variables
    var i, tabcontent, tablinks;

    //Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //Get all elents with class="tablinks" and remove the class "active:
    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i< tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    //Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}

//document.getElementsByClassName("defaultOpen").click();

