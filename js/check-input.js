// check house name
var num = /[0-9]+/;
$(".name").on({"keyup":function () {
        var val = $(this).val();
        if(val == ''){
            $("#iconfont").html("&#xe617;");
            $("#iconfont").addClass("h");
        }else{
            $("#iconfont").html("&#xe636;");
            $("#iconfont").removeClass("h");
        }
    }
})

// check select pla-txt
$(".pla-txt").change(function () {
    var find = $(this).find('option:selected');
    if($(find).text() === '区属'){
        $("#check").html("&#xe617;");
        $("#check").css("color",'red');
    }else{
        $("#check").html("&#xe636;");
        $("#check").css({"color":'green'});
    }
})

// check select pla-txt2
$(".pla-txt2").change(function () {
    var find = $(this).find('option:selected');
    if($(find).text() === '板块'){
        $("#check2").html("&#xe617;");
        $("#check2").css("color",'red');
    }else{
        $("#check2").html("&#xe636;");
        $("#check2").css({"color":'green'});
    }
})

// check content
$(".content").change(function () {
    var find = $(this).find('option:selected');
    if($(find).text() === '选择卧室内容'){
        $("#check3").html("&#xe617;");
        $("#check3").css("color",'red');
    }else{
        $("#check3").html("&#xe636;");
        $("#check3").css({"color":'green'});
    }
})

// check area-tit2
$(".area-tit2").change(function () {
   var ind = $(".area-tit2").val();
    if(ind == ''|| ind == undefined){
        $("#check5").html("请输入数字");
        $("#check5").css("color",'red');
    }else{
        $("#check5").html("&#xe636;");
        $("#check5").css({"color":'green'});
    }
})
// check rent-tit2
$(".rent-tit2").change(function () {
    var ind = $(".rent-tit2").val();
    if(ind == ''){
        $("#check6").html("请输入数字");
        $("#check6").css("color",'red');
    }else{
        $("#check6").html("&#xe636;");
        $("#check6").css({"color":'green'});
    }
})
// // check type-con
// $(".type-con").change(function () {
//
//     for(var i=0;i<4;i++){
//         var ind = $(".type-con").eq(i);
//         $(ind).removeClass('h');
//         var value = $(ind).val();
//         if(undefined != value){
//             value = value.replace(/(^\s*)|(\s*$)/g, "");
//         }
//         if(value ==''||value == undefined){
//             $(ind).val("不为空").addClass("h");
//         } else if(!number.test(value)){
//             $(ind).val("请输入数字").addClass("h");
//         }
//     }
//
//     if($(".type-con").eq(0).val() == 0 &&
//         $(".type-con").eq(1).val()== 0 &&
//         $(".type-con").eq(2).val() == 0 &&
//         $(".type-con").eq(3).val() == 0){
//         $(".type-con").val("不能全为0").css({"color":'red'});
//     }
// })

// if choose all,the before is disabled
$(".payment .all").change(function () {
    if($(this).is(':checked')){
        $(".pay1").attr("disabled",'');
        $(".pay1").attr("checked",'');
    }else{
        $(".pay1").removeAttr('disabled')
        $(".pay1").removeAttr("checked",'');
    }
});