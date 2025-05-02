document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    offset: 120,
    duration: 800,
    once: true
  });

  // Wait until full layout is done before refreshing AOS
  window.addEventListener("load", () => {
    setTimeout(() => {
      AOS.refreshHard(); // Ensures full recalculation
      
      // Smooth scroll to the top to prevent jumping or flickering
      window.scrollTo({
        top: 0,
        behavior: "smooth"  // This smooths the scroll
      });
    }, 0); // delay for layout stabilization
  });
});
