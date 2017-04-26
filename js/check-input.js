// check house name
var num = /[0-9]+/;
$(".name").on({"keyup":function () {
        var val = $(this).val();
        if(val == ''){
            $("#iconfont").html("&#xe617;");
            $("#iconfont").addClass("h");
            status1 = 0;
        }else{
            $("#iconfont").html("&#xe636;");
            $("#iconfont").removeClass("h");
            status1 = 1;
        }
    }
})

// check select pla-txt
$(".pla-txt").change(function () {
    var find = $(this).find('option:selected');
    if($(find).text() === '区属'){
        $("#check").html("&#xe617;");
        $("#check").css("color",'red');
        status2 = 0;
    }else{
        $("#check").html("&#xe636;");
        $("#check").css({"color":'green'});
        status2 = 1;
    }
})

// check select pla-txt2
$(".pla-txt2").change(function () {
    var find = $(this).find('option:selected');
    if($(find).text() === '板块'){
        $("#check2").html("&#xe617;");
        $("#check2").css("color",'red');
        status3 = 0;
    }else{
        $("#check2").html("&#xe636;");
        $("#check2").css({"color":'green'});
        status3 = 1;
    }
})

// check content
$(".content").change(function () {
    var find = $(this).find('option:selected');
    if($(find).text() === '选择卧室内容'){
        $("#check3").html("&#xe617;");
        $("#check3").css("color",'red');
        status4 = 0;
    }else{
        $("#check3").html("&#xe636;");
        $("#check3").css({"color":'green'});
        status4 = 1;
    }
})

// check content1
$(".content1").change(function () {
    var find = $(this).find('option:selected');
    if($(find).text() === '选择限制条件'){
        $("#check4").html("&#xe617;");
        $("#check4").css("color",'red');
        status5 = 0;
    }else{
        $("#check4").html("&#xe636;");
        $("#check4").css({"color":'green'});
        status5 = 1;
    }
})

// check area-tit2 name
$(".area-tit2 .name").change(function () {
    var val = /^[0-9]*$/;
    var ind = $(".area-tit2 .name").val();
    if(ind == ''){
        $("#check5").html("请输入有效数字");
        $("#check5").css("color",'red');
        status6 = 0;
    }
    else if(val.test(ind)){
        $("#check5").html("&#xe636;");
        $("#check5").css({"color":'green'});
        status6 = 1;
    }else if(!val.test(ind)){
        $("#check5").html("请输入有效数字");
        $("#check5").css("color",'red');
        status6 = 0;
    }
})
// check rent-tit2 name
$(".rent-tit2 .name").change(function () {
    var val = /^[0-9]*$/;
    var ind = $(".rent-tit2 .name").val();
    if(ind == ''){
        $("#check6").html("请输入有效数字");
        $("#check6").css("color",'red');
        status7 = 0;
    }
    else if(val.test(ind)){
        $("#check6").html("&#xe636;");
        $("#check6").css({"color":'green'});
        status7 = 1;
    }else if(!val.test(ind)){
        $("#check6").html("请输入有效数字");
        $("#check6").css("color",'red');
        status7 = 0;
    }
})


// check type-con
var txt = /^[1-9]d*|0$/; //包含0的正整数
$(".type-con").on("change",function () {
    $(".icon").removeClass("hover");
    $(".icon").removeClass("h");
    for(var i=0;i<4;i++){
        var txtnums = $(".type-con").eq(i);
        var val = $(txtnums).val();
        if(val == undefined){
            $(".icon").html("&#xe617;").addClass("h");
            $(".icon").css("color", 'red');
            status8 = 0;
        } else if(txt.test(val)){
            $(".icon").html("&#xe636;").addClass("hover");
            $(".icon").css("color", 'green');
            status8 = 1;
        }
    }
    if($(".type-con").eq(0).val() == 0 &&
        $(".type-con").eq(1).val()== 0 &&
        $(".type-con").eq(2).val() == 0 &&
        $(".type-con").eq(3).val() == 0){
        $(".icon").html("&#xe617;").addClass("h");
        $(".icon").css("color", 'red');

    }
    if($(".type-con").eq(0).val() == '' &&
        $(".type-con").eq(1).val()== '' &&
        $(".type-con").eq(2).val() == '' &&
        $(".type-con").eq(3).val() == ''){
        $(".icon").html("&#xe617;").addClass("h");
        $(".icon").css("color", 'red');

    }
})


// if choose all,the before is disabled
$(".payment .all").change(function () {
    if($(this).is(':checked')){
        $(".pay1").attr("disabled","");
        $(".pay1").attr("checked",'');
    }else{
        $(".pay1").removeAttr("disabled","");
        $(".pay1").removeAttr("checked",'');
    }
});


//images uploading
$(".upload").on("click",function(){
    $(".img").slideDown(1000);
})
$(".close").on("click",function(){
    $(".img").slideUp(1000);
})

//check name drop-down box 检查小区名称下拉框
$(".house .name").on("click",function () {
    $(".house-con").show();
})
$(".house .name").on("mouseleave",function () {
    $(".house-con").hide();
})

//filling the textarea information  填充文本区域信息
$(window).on("input change",function(){
    var a = $(".house .name").val();
    var b = $(".pla-txt").find('option:selected').text();
    var c = $(".pla-txt2").find('option:selected').text();
    var d = $(".type-con").eq(0).val();
    var e = $(".type-con").eq(1).val();
    var f = $(".type-con").eq(2).val();
    var g = $(".type-con").eq(3).val();

    if($(".form-con").eq(0).is(":checked")){
        h = "整租";
    } else {
        h = '';
    };

    if($(".form-con").eq(1).is(":checked")){
        i = "合租";
    } else {
        i = '';
    };

    var j = $(".content").find('option:selected').text();
    var k = $(".content1").find('option:selected').text();
    var l = $(".area .name").val();
    var m = $(".rent .name").val();
    var r = $(".all").val();
    if($(".pay1").eq(0).is(":checked")){
        n = "月付";
    } else {
        n = '';
    };
    if($(".pay1").eq(1).is(":checked")){
        o = "季付";
    } else {
        o = '';
    };
    if($(".pay1").eq(2).is(":checked")){
        p = "半年付";
    } else {
        p = '';
    };
    if($(".pay1").eq(3).is(":checked")){
        q = "年付";
    } else {
        q = '';
    };

    var s = $(".phone-number").val();
    $("#need").html(
        "小区名称:"+a+"<br>" +
        "区属板块:"+b+"&nbsp;&nbsp;"+c+"<br>" +
        "户型:"+d+"室"+e+"厅"+f+"卫"+g+"阳台"+"<br>" +
        "出租形式:"+h+"&nbsp;&nbsp;"+i+"&nbsp;&nbsp;"+j+"&nbsp;&nbsp;"+k+"<br>"+
        "面积:"+l+"平方米" + "<br>" +
        "租金:"+m+"元/月" +"<br>" +
        "付款方式:"+n+""+o+""+p+""+q+""+r+""+"<br>" +
        "手机号码:"+s+"")

})

// check submit
$(".submit").on("click",function(){
    if(status1==1 && status2==1 && status3==1 && status4==1 && status5==1 && status6==1 && status7==1 && status8 ==1){
        alert("提交成功");
    } else {
        alert("提交失败，请修改信息");
    }
})






















