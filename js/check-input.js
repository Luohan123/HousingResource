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

// check content1
$(".content1").change(function () {
    var find = $(this).find('option:selected');
    if($(find).text() === '选择限制条件'){
        $("#check4").html("&#xe617;");
        $("#check4").css("color",'red');
    }else{
        $("#check4").html("&#xe636;");
        $("#check4").css({"color":'green'});
    }
})

// check area-tit2 name
$(".area-tit2 .name").change(function () {
    var val = /^[0-9]*$/;
    var ind = $(".area-tit2 .name").val();
    if(ind == ''){
        $("#check5").html("请输入有效数字");
        $("#check5").css("color",'red');
    }
    else if(val.test(ind)){
        $("#check5").html("&#xe636;");
        $("#check5").css({"color":'green'});
    }else if(!val.test(ind)){
        $("#check5").html("请输入有效数字");
        $("#check5").css("color",'red');
    }
})
// check rent-tit2 name
$(".rent-tit2 .name").change(function () {
    var val = /^[0-9]*$/;
    var ind = $(".rent-tit2 .name").val();
    if(ind == ''){
        $("#check6").html("请输入有效数字");
        $("#check6").css("color",'red');
    }
    else if(val.test(ind)){
        $("#check6").html("&#xe636;");
        $("#check6").css({"color":'green'});
    }else if(!val.test(ind)){
        $("#check6").html("请输入有效数字");
        $("#check6").css("color",'red');
    }
})
// check type-con
var txt = /^[1-9]d*|0$/;//包含0的正整数
$(".type-con").change(function () {
    for(var i = 0;i<4;i++){
        var txtnums = $(".type-con").eq(i).val();
        if(!txt.test(txtnums)){
            $(".icon").html("&#xe617;");
            $(".icon").css("color",'red');
        } else{
            $(".icon").html("&#xe636;");
            $(".icon").css("color",'green');
        }
    }
})


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


//images uploading
$(".upload").on("click",function(){
    $(".img").slideDown(1000);
})
$(".close").on("click",function(){
    $(".img").slideUp(1000);
})

//check name drop-down box
$(".house .name").on("click",function () {
    $(".house-con").show();
})
$(".house .name").on("mouseleave",function () {
    $(".house-con").hide();
})

//filling the textarea information
$(window).on("change",function(){
    var a = $(".house .name").val();
    var b = $(".pla-txt").find('option:selected').text();
    var c = $(".pla-txt2").find('option:selected').text();
    var d = $(".type-con").eq(0).val();
    var e = $(".type-con").eq(1).val();
    var f = $(".type-con").eq(2).val();
    var g = $(".type-con").eq(3).val();
    var h = $(".content").find('option:selected').text();
    var i = $(".content1").find('option:selected').text();
    var j = $(".area .name").val();
    var k = $(".rent .name").val();
    var l = $(".phone-number").val();
    $("#need").html(
        "小区名称:"+a+"<br>" +
        "区属板块:"+b+c+"<br>" +
        "户型:"+d+"室"+e+"厅"+f+"卫"+g+"阳台"+"<br>" +
        "出租形式:"+h+"&nbsp;"+i+"<br>" +
        "面积:"+j+"平方米" + "<br>" +
        "租金:"+k+"元/月" +"<br>" +
        "手机号码:"+l+".")

})
