//登出下拉
$(document).ready(function () {
    $(".dropdown-toggle").click(function () {
        $(".dropdown-menu").toggle();
    });
});
// 類別開關
$(document).ready(function () {
    $(".switch").click(function () {
        $(".turn_on").toggle();
    });
});
// 縣市開關
$(document).ready(function () {
    $(".switch2").click(function () {
        $(".turn_on2").toggle();
    });
});
// 久未聯絡客戶
$(document).ready(function () {
    $(".switch3").click(function () {
        $(".turn_on3").toggle();
    });
});
// 學區
$(document).ready(function () {
    $(".switch4").click(function () {
        $(".turn_on4").toggle();
    });
});
// 對產品有興趣
$(document).ready(function () {
    $(".switch5").click(function () {
        $(".turn_on5").toggle();
    });
});
// 縣市2
$(document).ready(function () {
    $(".switch6").click(function () {
        $(".turn_on6").toggle();
    });
});
// 縣市3
$(document).ready(function () {
    $(".switch7").click(function () {
        $(".turn_on7").toggle();
    });
});
// 訪談目的/內容
$(document).ready(function () {
    $(".switch8").click(function () {
        $(".turn_on8").toggle();
    });
});
//本次產品新增
$(document).ready(function () {
    $(".interview_addbtn").click(function () {
        $(".product_interview_add").show();
    });
    $(".interview_closebtn").click(function () {
        $(".product_interview_add").hide();
    });
});
//電訪開關
$(document).ready(function () {
    $(".appointment").click(function () {
        $(".appointment_content").show();
        $(".tel_interview").hide();
    });
    $(".appointment_closebtn").click(function () {
        $(".tel_interview").show();
        $(".appointment_content").hide();
    });
});
//面訪開關
$(document).ready(function () {
    $(".make_appointment").click(function () {
        $(".on_appointment").show();
        $(".interview_record").hide();
    });
    $(".on_appointment_closebtn").click(function () {
        $(".interview_record").show();
        $(".on_appointment").hide();
    });
});
//訪談目的
$(document).ready(function () {
    $(".interview_purpose_choose").click(function () {
        $(".interview_purpose").show();
    });
    $(".interview_purpose_closebtn").click(function () {
        $(".interview_purpose").hide();
    });
});
//金鼎-維護抵用金額
$(document).ready(function () {
    $(".maintenance_credit_btn").click(function () {
        $(".maintenance_credit").show();
        $(".jinding_order").hide();
    });
    $(".maintenance_credit_cancel").click(function () {
        $(".jinding_order").show();
        $(".maintenance_credit").hide();
    });
});
//商品購買資訊
$(document).ready(function () {
    $(".view_detail").click(function () {
        $(".software_information").toggle();
    });
});
//選擇客戶
$(document).ready(function () {
    $(".switch7").click(function () {
        $(".turn_on7").toggle();
    });
});
//建立新訂單-新增產品
$(document).ready(function () {
    $(".add_pro_btn").click(function () {
        $(".new_order_add").show();
    });
    $(".new_order_add_cancel").click(function () {
        $(".new_order_add").hide();
    });
});
//其他選項
$(document).ready(function () {
    $(".other_btn").click(function () {
        $(".other_btn_box").toggle();
    });
});
//建立新訂單-新增產品
$(document).ready(function () {
    $(".add_pro_btn02").click(function () {
        $(".new_order_add02").show();
    });
    $(".new_order_add_cancel02").click(function () {
        $(".new_order_add02").hide();
    });
});