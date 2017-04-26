// fuzzy search
json = {
    a:"弓箭坊",
    b:"三山街",
    c:"南京南",
    d:"中华门"
}

$('input[class=name]').on({"keyup" :function() {
    var val = $(this).val();
        if (val== ''){
            $("#iconfont").html("&#xe617;");
            $("#iconfont").addClass("h");
        }
        else{
            $("#iconfont").html("&#xe636;");
            $("#iconfont").removeClass("h");
        }
        query();
        $('#need').append('<p>小区名称：' +val +'</p>');
        $('#need').append('<p>小区名称：' +val +'</p>');
    }}
)





          
