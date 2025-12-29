 window.addEventListener("load", function () {
    const loader = document.getElementById("preload");
    loader.classList.add("hide");
  });


  // scroll button 
   const bottomBtn = document.getElementById("bottomBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      bottomBtn.classList.add("active");
    } else {
      bottomBtn.classList.remove("active");
    }
  });

  bottomBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });