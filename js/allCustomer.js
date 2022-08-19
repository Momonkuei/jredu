/* 客戶等級分類影響選取背景 */
$('#customerLevel').change(function () {
	if ($(this).val() == '1') {
		$('#customerLevel').css('background-color', 'rgba(240, 101, 149, 0.7)');
	}
	if ($(this).val() == '2') {
		$('#customerLevel').css('background-color', 'rgba(213, 163, 46, 0.7)');
	}
	if ($(this).val() == '3') {
		$('#customerLevel').css('background-color', 'white');
	}
});
