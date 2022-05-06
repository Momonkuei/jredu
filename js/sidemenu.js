// $("#leftside-navigation .sub-menu > a").click(function (e) {
//     $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
//         e.stopPropagation()
// })

const accordions = document.querySelectorAll('.sideBar_accordion');

accordions.forEach(acc => {
    acc.addEventListener("click", () => {
        console.log(acc);
        acc.classList.toggle("active");
        const panel = acc.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
})