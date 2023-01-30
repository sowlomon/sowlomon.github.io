
window.addEventListener("load", function(){
  document.querySelector(".preloader").classList.add("opacity-0");

  setTimeout(() =>{
    document.querySelector(".preloader").style.display="none";
  },1000)
})


const nav = document.querySelector(".nav"),
navList= nav.querySelectorAll("li"),
totalNavList = navList.length;
allSection = document.querySelectorAll(".section");
totalSection = allSection.length;


for(i=0; i < totalNavList; i++){
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function(){
    
   removeBackSectionClass();



    for(let j=0; j< totalNavList; j++ ){
      if(navList[j].querySelector("a").classList.contains("active")){
        addBackSectionClass(j)
        
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active")

    showSection(this);

    if(window.innerWidth < 1200){
      asideSectionTogglerBtn();
    }
  })

}


function removeBackSectionClass(){
  for(let i=0; i<totalSection; i++){
    allSection[i].classList.remove("back-section")
  }
}

function addBackSectionClass(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element){
  for(let i = 0; i < totalSection; i++){
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];

  document.querySelector("#"+ target).classList.add("active")   
}

function updateNav(element){
  for(let i=0; i< totalNavList; i++){
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").slit("#")[i];
    if(target === navList[i].querySelector("a").getAttribute("href").slit("#")[i]){
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function(){
  const SectionIndex = this.getAttribute("data-section-index")
  showSection(this);
  updateNav(this);
  removeBackSectionClass();
  addBackSectionClass(SectionIndex);
})


const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside= document.querySelector(".aside");


navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for(let i = 0; i < totalSection; i++){
    allSection[i].classList.toggle("open");
  }

}
