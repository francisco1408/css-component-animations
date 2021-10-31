console.log(2+2);
let getSections = document.querySelectorAll("section");
console.log(getSections);

let setAnimations = (sectionBox)=>{
    getSections.forEach((sectionBox)=>{
        let rect = sectionBox.getBoundingClientRect();
        if(sectionBox.id=="fire"){
            sectionBox.classList.remove("animated");
            if(rect.bottom <= window.innerHeight*1.85 && rect.top >= window.innerHeight*-0.85){
                sectionBox.classList.add("animated_fire");
            } else {
                sectionBox.classList.remove("animated_fire");
                
            }
        } else {
            sectionBox.classList.remove("animated_fire");
            if(rect.bottom <= window.innerHeight*1.85 && rect.top >= window.innerHeight*-0.85){
                sectionBox.classList.add("animated");
            } else {
                sectionBox.classList.remove("animated");
            }
        }
        
    });
};
setAnimations();

document.querySelector(".scroll-container").addEventListener("scroll",()=>{
    setAnimations();
    
});