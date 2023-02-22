$(document).ready(function(){
 $(window).scroll(function(){
     if(this.scrollY > 20){
         $('.navbar').addClass("sticky")
     }else{
         $('.navbar').removeClass("sticky")
     }
 });


 $('.hari1-btn').click(function(){
     $('.navbar .hari1').toggleClass("active");
     $('.hari1-btn i').toggleClass("active");
 })
})

function drive() {
    window.open("https://drive.google.com/file/d/1Bdpue047viSTaArmu0TdpTDTGIAbvEDI/view?usp=share_link", "_blank");
}
  
  let docTitle=document.title;
  window.addEventListener("blur",()=>{
    document.title=" Come Back :(";
  })
  window.addEventListener("focus",()=>{
    document.title=docTitle;
  })
