// check mobile number
var mobile = /^1[34578]\d{9}$/;  //检测手机号
var nums = null;
    $(".phone-number").change(function () {
        nums = $(this).val();
        if(nums == ''){
            $("#formal").html("手机号码不为空");
            $("#formal").css({"color":'red'});
        }
        else if(!mobile.test(nums)) {
            $("#formal").html("格式错误");
            $("#formal").css({"color":'red'});
        }
            else if(mobile.test(nums)) {
            $("#formal").html("&#xe636;").addClass("hover");
            $("#formal").css({"color":'green'});
        }
})

