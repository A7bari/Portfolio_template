const nav = document.querySelector(".primary-navigation");
const navToggler = document.querySelector(".mobile-nav-toggler");
const navButtons = document.querySelectorAll(".nav-button");
const body = document.querySelector("body");

const arr = ["HOME","ABOUT", "PROJECTS","SERVICES" ]

document.addEventListener("scroll", ()=>{
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    if (isScrolledIntoView(sec)) {
      navButtons[arr.indexOf(sec.id)].setAttribute("data-clicked", true);
    } else {
      navButtons[arr.indexOf(sec.id)].setAttribute("data-clicked", false);
    }
  })

})


function isScrolledIntoView(el) {
  let percentVisible = 0.3 ;
  let elemTop = el.getBoundingClientRect().top;
  let elemBottom = el.getBoundingClientRect().bottom;
  let elemHeight = el.getBoundingClientRect().height;
  let overhang = elemHeight * (1 - percentVisible);

  let isVisible = (elemTop >= -overhang) && (elemBottom <= window.innerHeight + overhang);
  return isVisible;
}


navToggler.addEventListener("click"  ,()=> {
  const visible = nav.getAttribute("data-visible");
  if (visible === "false") {
    nav.setAttribute("data-visible", true);
    navToggler.setAttribute("aria-expeded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggler.setAttribute("aria-expeded", false);
    
  } 
})