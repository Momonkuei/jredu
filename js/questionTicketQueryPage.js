// $('#cramSchoolNameSearch').select2({
// 	theme: 'bootstrap-5',
// 	width: $(this).data('width')
// 		? $(this).data('width')
// 		: $(this).hasClass('w-100')
// 		? '100%'
// 		: 'style',
// 	placeholder: $('#cramSchoolNameSearch').data('placeholder'),
// });
/* 填問題單時，客戶選擇 */
$('#cramSchoolNameSearch').select2({
	theme: 'bootstrap-5',
	width: $('#cramSchoolNameSearch').data('width')
		? $('#cramSchoolNameSearch').data('width')
		: $('#cramSchoolNameSearch').hasClass('w-100')
		? '100%'
		: 'style',
	placeholder: $('#cramSchoolNameSearch').data('placeholder'),
});

$('#selectCramSchoolCounty').select2({
	theme: 'bootstrap-5',
	width: $('#selectCramSchoolCounty').data('width')
		? $('#selectCramSchoolCounty').data('width')
		: $('#selectCramSchoolCounty').hasClass('w-100')
		? '100%'
		: 'style',
	placeholder: $('#selectCramSchoolCounty').data('placeholder'),
});

$('#selectCramSchoolAdministrativeArea').select2({
	theme: 'bootstrap-5',
	width: $('#selectCramSchoolAdministrativeArea').data('width')
		? $('#selectCramSchoolAdministrativeArea').data('width')
		: $('#selectCramSchoolAdministrativeArea').hasClass('w-100')
		? '100%'
		: 'style',
	placeholder: $('#selectCramSchoolAdministrativeArea').data('placeholder'),
});
