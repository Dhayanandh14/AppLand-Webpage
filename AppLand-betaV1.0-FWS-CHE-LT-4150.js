window.onload=function(){
    const header = document.querySelector(header)
    const section = document.querySelector(".section-one")
    const SectionOneOptions={};
    const sectionOneObserver = new IntersectionObserver(function (entires,sectionOneObserver){
        entires.forEach(entry=>{
            console.log(entry.target)
        })
    },SectionOneOptions);
    sectionOneObserver.observe(section)
     
}