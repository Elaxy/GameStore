let navItems = document.querySelectorAll(".navigation__link");
const sectionAbout = document.querySelector("#section-about");
const sectionAdventure = document.querySelector("#section-rental");
const sectionTour = document.querySelector("#section-team-comp");
const sectionFeedback = document.querySelector("#section-gallery");
const sectionBook = document.querySelector("#section-contacts");
const navToggle = document.querySelector("#navi-toggle");

navItems.forEach(item => {
   item.addEventListener('click', function(){
      if (navToggle.checked){
         navToggle.checked = false;
      } else {
         navToggle.checked = true;
      }
   });
});