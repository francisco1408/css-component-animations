console.log(2+2);
let getSections = document.querySelectorAll("section");
console.log(getSections);
let isVisible = (rect) =>rect.bottom <= window.innerHeight*1.85 && rect.top >= window.innerHeight*-0.85;
let setAnimations = (sectionBox)=>{
    getSections.forEach((sectionBox)=>{
        let rect = sectionBox.getBoundingClientRect();
        if(sectionBox.id=="fire"){
            sectionBox.classList.remove("animated");
            sectionBox.classList.remove("animated_thunder");
            sectionBox.classList.remove("animated_neon");
            if(isVisible(rect)){
                sectionBox.classList.add("animated_fire");
            } else {
                sectionBox.classList.remove("animated_fire");
                
            }
        } else if(sectionBox.id=="thunder"){
            sectionBox.classList.remove("animated");
            sectionBox.classList.remove("animated_fire");
            sectionBox.classList.remove("animated_neon");
            if(isVisible(rect)){
                sectionBox.classList.add("animated_thunder");
            } else {
                sectionBox.classList.remove("animated_thunder");
                
            }
        } else if(sectionBox.id=="neon"){
            sectionBox.classList.remove("animated");
            sectionBox.classList.remove("animated_fire");
            sectionBox.classList.remove("animated_thunder");
            if(isVisible(rect)){
                sectionBox.classList.add("animated_neon");
            } else {
                sectionBox.classList.remove("animated_neon");
                
            }
    }
        else {
            sectionBox.classList.remove("animated_fire");
            sectionBox.classList.remove("animated_thunder");
            sectionBox.classList.remove("animated_neon");
            if(isVisible(rect)){
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