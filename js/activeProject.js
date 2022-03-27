function activateProject(projectID, show){
    document.getElementById("all-projects").classList.remove("project-active");
    document.getElementById("backend-projects").classList.remove("project-active");
    document.getElementById("frontend-projects").classList.remove("project-active");
    document.getElementById("other-projects").classList.remove("project-active");
    var project = document.getElementById(projectID);
    project.classList.add("project-active");
    if(show == "all"){
        console.log("aa");
        const all = document.getElementsByClassName('item');  
        for(var i = 0; i < all.length; i++) {
            all[i].style.display='block';
        }
    }
    else{
        const all = document.getElementsByClassName('item');  
        for(var i = 0; i < all.length; i++) {
            all[i].style.display='none';
        }
        const showItem = document.querySelectorAll("[id="+show+"]");
        for(var i = 0; i < showItem.length; i++) {
            showItem[i].style.display='block';
            
        }
    }
    
    
   
}