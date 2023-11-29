
$(function(){
           
    $(".prod_ul > li:nth-child(2)>.imgbox").stop().hide();
    $(".prod_ul > li:nth-child(3)>.imgbox").stop().hide();
    $(".input_radio2").click(function(){ 
    $(".prod_ul > li:nth-child(2)>.imgbox").stop().hide();
    $(".prod_ul > li:nth-child(3)>.imgbox").stop().hide();
        $("#box2").stop().show();
        $("#box1").stop().hide();
        $("#box3").stop().hide();
    });

    $(".input_radio3").click(function(){ 
        $(".prod_ul > li:nth-child(1)>.imgbox").stop().hide();
        $(".prod_ul > li:nth-child(2)>.imgbox").stop().hide();
            $("#box3").stop().show();
            $("#box1").stop().hide();
            $("#box2").stop().hide();
        });

        $(".input_radio1").click(function(){ 
            $(".prod_ul > li:nth-child(2)>.imgbox").stop().hide();
            $(".prod_ul > li:nth-child(3)>.imgbox").stop().hide();
                $("#box1").stop().show();
                $("#box2").stop().hide();
                $("#box3").stop().hide();
            });    

    
});