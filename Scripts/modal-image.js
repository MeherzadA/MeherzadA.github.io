document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-img");
    const modalImage = document.getElementById("modalImage");
  
    images.forEach(img => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => {
        modalImage.src = img.src;
        const modal = new bootstrap.Modal(document.getElementById("imageModal"));
        modal.show();
      });
    });
  });
