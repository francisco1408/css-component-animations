console.log(2+2);
let getSections = document.querySelectorAll("section");
console.log(getSections);

let setAnimations = (sectionBox)=>{
    getSections.forEach((sectionBox)=>{
        let rect = sectionBox.getBoundingClientRect();
        if(rect.bottom <= window.innerHeight*1.8 && rect.top >= window.innerHeight*-0.8){
            sectionBox.classList.add("animated");
        } else {
            sectionBox.classList.remove("animated");
        }
    });
};
setAnimations();

document.querySelector(".scroll-container").addEventListener("scroll",()=>{
    setAnimations();
    
});