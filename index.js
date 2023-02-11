$(document).ready(function(){
 $(window).scroll(function(){
     if(this.scrollY > 20){
         $('.navbar').addClass("sticky")
     }else{
         $('.navbar').removeClass("sticky")
     }
 });


 $('.menu-btn').click(function(){
     $('.navbar .menu').toggleClass("active");
     $('.menu-btn i').toggleClass("active");
 })
})

function drive() {
    window.open("https://drive.google.com/file/d/1Bdpue047viSTaArmu0TdpTDTGIAbvEDI/view?usp=share_link", "_blank");
}
  