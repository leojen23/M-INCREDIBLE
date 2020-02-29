$(function() {
    console.log( "ready!" );

$navIncred = $("li:eq(0)");
$navElastic = $("li:eq(1)");
$navViolet = $("li:eq(2)");
$navDash = $("li:eq(3)");
$navJack = $("li:eq(4)");


$frameIncred = $("#frame-incred");
$frameElastic = $("#frame-elastic");
$frameViolet = $("#frame-violet");
$frameDash = $("#frame-dash");
$frameJack = $("#frame-jack");

$powerBar = $("progress");


function navHover($navLink,$frame){
    $navLink
    .on("mouseenter",function(){
        $frame.css("display", "block")
    })
    .on("mouseleave",function(){
        $frame.css("display", "none")
    })
 };

    navHover($navIncred,$frameIncred);
    navHover($navElastic,$frameElastic);
    navHover($navViolet,$frameViolet);
    navHover($navDash,$frameDash);
    navHover($navJack,$frameJack);
});