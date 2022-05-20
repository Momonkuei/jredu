let navbarLink = document.querySelector(".nav_container").querySelectorAll("a");

let tabContents = document.getElementById("tab-inner").querySelectorAll('.form-content');
window.onload = function () {

    // 啟動第一個panel
    panelDisplay(navbarLink[0]);
    //點擊  tab a連結
    for (let i = 0; i < navbarLink.length; i++) {
        navbarLink[i].addEventListener('click', function (e) {
            e.preventDefault();
            panelDisplay(this);
            // return false;
        });

    };

    function panelDisplay(activePanel) {
        // Do something...
        for (let i = 0; i < navbarLink.length; i++) {
            console.log(navbarLink[i]);
            console.log(tabContents[i]);

            //設定條件tabLink ==activePanel 
            //將tablink代入for循環中並利用 if ...else 進行條件 classList.add增加class="active" ，
            //就是每執行一次function的時候就進行全部tablinks增加class

            if (navbarLink[i] == activePanel) {
                navbarLink[i].classList.add("active");
                tabContents[i].style.display = "block";

            } else {
                navbarLink[i].classList.remove("active");
                tabContents[i].style.display = "none";
            }
        }
    }

};