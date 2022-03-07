const dropdownIcon = document.getElementById("dropdown-icon");
const links = document.querySelector(".links");

dropdownIcon.addEventListener("click", (event) => {
   event.stopPropagation();
   const style = window.getComputedStyle(links);
   if (style.display === "none") {
      links.style.display = "flex";
      setTimeout(() => {
         links.style.maxHeight = "300px";
      }, 1);
   } else {
      closeDropdown();
   }
});

links.addEventListener("click", (event) => {
   event.stopPropagation();
});

window.addEventListener("resize", () => {
   if (window.innerWidth > 700) {
      if (links.style.display === "none") {
         links.style = "";
      }
   }
});

document.body.addEventListener("click", (event) => {
   const style = window.getComputedStyle(links);
   if (window.innerWidth <= 700 && style.display === "flex") {
      closeDropdown();
   }
});

function closeDropdown() {
   links.style.maxHeight = "0";
   setTimeout(() => {
      links.style = "";
   }, 750);
}
