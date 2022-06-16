

const toggleRows = document.querySelectorAll(".content_table_tbody_tr");
const tdListTables = document.querySelectorAll(".td_list_table");

const btns = document.querySelectorAll(".content-table .btn");

const contentTableInputs = document.querySelectorAll('.content-table input[type="checkbox"]');



toggleRows.forEach(toggleRow => {
    toggleRow.addEventListener("click", () => {

        if (toggleRow.classList.contains('active_row')) {
            toggleRow.classList.toggle("active_row");
            toggleRow.nextElementSibling.querySelector('.td_list_table').classList.toggle("List_table_active");
        } else {
            removeListTableActive();

            toggleRow.classList.toggle("active_row");
            toggleRow.nextElementSibling.querySelector('.td_list_table').classList.toggle("List_table_active");
        }

    })
})

function removeListTableActive() {
    tdListTables.forEach(tdListTable => {
        tdListTable.classList.remove("List_table_active");
        console.log("test", tdListTable.parentNode.previousElementSibling)
        tdListTable.parentNode.previousElementSibling.classList.remove("active_row");
    })
}

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
    })
})

contentTableInputs.forEach(input => {
    input.addEventListener("click", (e) => {
        e.stopPropagation();
    })
})