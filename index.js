const dropdownIcon = document.getElementById("dropdown-icon");
const links = document.querySelector(".links");

dropdownIcon.addEventListener("click", () => {
   const style = window.getComputedStyle(links);
   if (style.display === "none") {
      links.style.display = "flex";
      setTimeout(() => {
         links.style.maxHeight = "300px";
         links.style.color = "#1f2937"
      }, 1);
   } else {
      links.style.maxHeight = "0";
      setTimeout(() => {
         links.style.display = "none";
      }, 750);
   }
});

window.addEventListener("resize", () => {
   if (window.innerWidth > 700) {
      if (links.style.display === "none") {
         links.style = ""
      }
   }
})