
//  document ready function start here
 $('document').ready(function() {
            
            
});
//  document ready function ends here
// button one function start here
$("#css").click(function() {
    $("h1").css("color","red");
    alert("Button has been clicked")
    $("#css").text("Clicked")
})
// button one function ends here

$("p:first").click(function(){
    alert($(this).text());
 });


//  input function starts here
$("input").focus(function(){
    $(this).css("background","#97F491")
});
$("input").blur(function(){
    $(this).css("background","gray")
})
//  input function ends here


$("input").mouseenter(function(){
    $(this).css("background","#3095D9")
})
$("input").mouseleave(function(){
    $(this).css("background","")
})
 