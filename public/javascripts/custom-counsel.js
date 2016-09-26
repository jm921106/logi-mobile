/**
 * Created by SE JUNE on 2016-09-26.
 */
//인풋 박스 수정사항.
$(".Logi-inputs").focus(function () {
    $(this).closest('.input-field').closest('.Logi-input').css({
        "border": "1px solid #4cc378",
        "padding-top": "15px",
        "box-shadow": "1px 1px 1px 1px #4cc378"
    });
});

$(".Logi-inputs").blur(function () {
    if ($(this).val() == "")
        $(this).closest('.input-field').closest('.Logi-input').css({
            "border": "1px solid #9e9e9e",
            "padding-top": "0px",
            "box-shadow": "none"
        });
    else
        $(this).closest('.input-field').closest('.Logi-input').css({
            "border": "1px solid #9e9e9e",
            "padding-top": "10px",
            "box-shadow": "none"
        });
});