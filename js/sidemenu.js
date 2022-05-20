// $("#leftside-navigation .sub-menu > a").click(function (e) {
//     $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
//         e.stopPropagation()
// })


//側邊選單摺疊function
const accordions = document.querySelectorAll('.sideBar_accordion');

accordions.forEach(acc => {
    acc.addEventListener("click", () => {
        // console.log(acc);
        acc.classList.toggle("sideBar_active");
        const panel = acc.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
})



//打開側邊選單function

const openHideSideBar = document.querySelector('.openHideSideBar');
const sideBarMenu = document.querySelector('.sidebar-menu');
const rightContant = document.querySelector('.right_content');
// console.log(hideBtn);
openHideSideBar.addEventListener('click', () => {
    sideBarMenu.style.width = "240px";
    sideBarMenu.style.overflow = "visible";
    rightContant.style.marginLeft = '240px';
    openHideSideBar.style.display = "none";

    console.log(openHideSideBar.style.display);


})
console.log(openHideSideBar);

//關閉側邊選單

//側邊隱藏按鈕
const sidebarHideBtn = document.querySelector('.sidebarHideBtn');

sidebarHideBtn.addEventListener('click', () => {

    if (screen.width > 1440) {
        sideBarMenu.style.width = "240px";
        sideBarMenu.style.overflow = "visible";
        rightContant.style.marginLeft = '240px';
        openHideSideBar.style.display = "none";
        // console.log('screen>1440')
    } else {
        sideBarMenu.style.width = "0px";
        sideBarMenu.style.overflow = "hidden";
        rightContant.style.marginLeft = '0px';
        openHideSideBar.style.display = "flex";
        // console.log('screen <1440')
    }

})

//偵測螢幕寬度是否有改變，改動側邊選單的值
window.onresize = function () {
    sideBarMenu.style.width = "240px";
    sideBarMenu.style.overflow = "visible";
    rightContant.style.marginLeft = '240px';
    openHideSideBar.style.display = "none";
    // console.log('screen>1440')
}

//點選側邊選單項目後側邊選單進行收回

const panelLists = document.querySelectorAll(".panelList");

// console.log(panelLists)


panelLists.forEach(panelList => {

    [...panelList.children].forEach(panelListLi => {



        panelListLi.children[0].addEventListener('click', function () {
            //把打開的手風琴收回
            accordions.forEach(acc => {
                acc.classList.remove("sideBar_active");
                const panel = acc.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
            })
            //點擊選項及收回項目
            if (screen.width != 1920) {
                sideBarMenu.style.width = "0px";
                sideBarMenu.style.overflow = "hidden";
                rightContant.style.marginLeft = '0px';
                openHideSideBar.style.display = "flex";
                // console.log('123');
            }

        })

    })
})