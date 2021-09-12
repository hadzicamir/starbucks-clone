window.onscroll = function () { myFunction() };

let header = document.getElementById('myNavbar');

let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

function openMenu(evt, number) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(number).style.display = "flex";
    evt.currentTarget.className += "active";
}

document.getElementById("defaultOpen").click();

