const body = document.body;
let lastScroll = 0;
window.addEventListener('scroll', ()=>{
    const currentScroll = window.pageYOffset;
    if(currentScroll <= 0){
        body.classList.remove("scroll-up");
    }
    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");

    }
    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");

    }
    lastScroll = currentScroll;
})
document.getElementById("openMenu").addEventListener("click", function(){
    document.getElementById("nav-mobile").style.top = "0";
    document.getElementById("nav").style.display = "none";
    window.scrollTo(0, 0);
    setTimeout(function(){
        scrollLock("none")}, 300);
    

});
document.getElementById("closeMenu").addEventListener("click", function(){
    document.getElementById("nav-mobile").style.top = "-105vh";
    document.getElementById("nav").style.display = "block";
    scrollLock("block");
});
function navControlScroll(navItemID, SectionID){
    document.getElementById("intro-link").classList.remove("active-item");
    document.getElementById("services-link").classList.remove("active-item");
    document.getElementById("about-link").classList.remove("active-item");
    document.getElementById("projects-link").classList.remove("active-item");
    var element = document.getElementById(navItemID);
    element.classList.add("active-item");
    var element = document.getElementById(SectionID);
    scrollLock("block");
    element.scrollIntoView();
    document.getElementById("nav-mobile").style.top = "-105vh";
    document.getElementById("nav").style.display = "block";
    setTimeout(
        function() {
            document.querySelector("body").classList.remove("scroll-down");
            if(window.pageYOffset == 0){
                document.querySelector("body").classList.remove("scroll-up");
            }
            else{
                document.querySelector("body").classList.add("scroll-up");
            }
            
        }, 800);

    return true;
}
function scrollLock(property){
    document.getElementById("nav").style.display = property;
    document.getElementById("about").style.display = property;
    document.getElementById("projects").style.display = property;
    document.getElementById("services").style.display = property;
}