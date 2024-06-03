const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("education-container-item-show");
    } else {
      entry.target.classList.remove("education-container-item-show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".education-container-item");
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("project-link-show");
    } else {
      entry.target.classList.remove("project-link-show");
    }
  });
});

const hiddenElements2 = document.querySelectorAll(".project-link");
hiddenElements.forEach((el) => observer.observe(el));
