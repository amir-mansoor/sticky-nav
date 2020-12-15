const nav = document.getElementById("main");
const topOfNav = nav.offsetTop;

function fixdnav() {
    if (window.scrollY >= topOfNav) {
    	document.body.style.paddingTop = nav.offsetHeight + 'px';
    	document.body.classList.add("fixednav");
    } else {
    	document.body.classList.remove("fixednav");
    	document.body.style.paddingTop = 0;
    }
}

document.addEventListener("scroll", fixdnav);