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

const observer2 = new IntersectionObserver((entries2) => {
  entries2.forEach((entry2) => {
    console.log(entry2);
    if (entry2.isIntersecting) {
      entry2.target.classList.add("project-link-show");
    } else {
      entry2.target.classList.remove("project-link-show");
    }
  });
});

const hiddenElements2 = document.querySelectorAll(".project-link");
hiddenElements2.forEach((el2) => observer2.observe(el2));
