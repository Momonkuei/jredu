// $("#leftside-navigation .sub-menu > a").click(function (e) {
//     $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
//         e.stopPropagation()
// })

const accordions = document.querySelectorAll('.sideBar_accordion');

accordions.forEach(acc => {
    acc.addEventListener("click", () => {
        console.log(acc);
        acc.classList.toggle("sideBar_active");
        const panel = acc.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
})

console.log(screen.width);



const hideBtn = document.querySelector('.openHideSideBar');
const sideBarMenu = document.querySelector('.sidebar-menu');
const rightContant = document.querySelector('.right_content');
console.log(hideBtn);
hideBtn.addEventListener('click', () => {
    sideBarMenu.style.width = "240px";
    sideBarMenu.style.overflow = "visible";
    // rightContant.style.marginLeft = '240px';
})

const sidebarHideBtn = document.querySelector('.sidebarHideBtn');

sidebarHideBtn.addEventListener('click', () => {

    if (screen.width > 1440) {
        sideBarMenu.style.width = "240px";
        sideBarMenu.style.overflow = "visible";
        console.log('screen>1440')
    } else {
        sideBarMenu.style.width = "0px";
        sideBarMenu.style.overflow = "hidden";
        console.log('screen <1440')
    }

})

window.onresize = function () {
    sideBarMenu.style.width = "240px";
    sideBarMenu.style.overflow = "visible";
    console.log('screen>1440')
}

