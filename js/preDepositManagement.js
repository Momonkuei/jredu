

const toggleRows = document.querySelectorAll(".content_table_tbody_tr");
const tdListTables = document.querySelectorAll(".td_list_table");


toggleRows.forEach(toggleRow => {
    toggleRow.addEventListener("click", () => {
        toggleRow.classList.toggle("active_row");
        toggleRow.nextElementSibling.querySelector('.td_list_table').classList.toggle("List_table_active");
    })
})

function removeListTableActive() {
    tdListTables.forEach(tdListTable => {
        tdListTable.classList.remove("List_table_active");
    })
}