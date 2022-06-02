const billBtns = document.querySelectorAll('.billBtn');
// console.log(billBtns);
billBtns.forEach(billBtn => {
    const toggleMenu = billBtn.parentNode.parentNode.querySelector('.bill-menu');
    billBtn.addEventListener('click', () => {
        toggleMenu.classList.toggle('active');
    })
})