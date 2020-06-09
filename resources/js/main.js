$(document).ready(function(){
$(window).scroll(function(){
    var t = $('html').scrollTop();
    
    if( t > 50){
        $('.head').addClass('fixed')
    }else{
        $('.head').removeClass('fixed')
    }
})
})
function openNav(){ document.getElementById('mynav').style.width = "100%";
}
function closeNav(){ document.getElementById('mynav').style.width = "0%";
}