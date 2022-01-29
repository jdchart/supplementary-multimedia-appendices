var collapsables = document.getElementsByClassName("collapsable");

//
// For this to work - you need to also modify the max-height of any parents!!
//
/*
for(i = 0; i < collapsables.length; i++){
    collapsables[i].addEventListener("click", function(){
        this.classList.toggle("collapsable_active");
        var content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
*/

for(i = 0; i < collapsables.length; i++){
    collapsables[i].addEventListener("click", function(){
        this.classList.toggle("collapsable_active");
        var content = this.nextElementSibling;

        if(content.style.display === "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
        }

        
    });
}