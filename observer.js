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

const gridObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const projectLinks = document.querySelectorAll(".project-link");
    projectLinks.forEach((link) => {
      if (entry.isIntersecting) {
        link.classList.add("project-link-show");
      } else {
        link.classList.remove("project-link-show");
      }
    });
  });
});

const gridElement = document.querySelectorAll(".grid-gallery");
gridElement.forEach((el2) => gridObserver.observe(el2));

const mailBtn = document.querySelector(".button-apple-3d");
mailBtn.addEventListener("click", (e) => {
  const mail = "kacper.pisula27@gmail.com";
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = mail;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  mailBtn.classList.add("copied");
  setTimeout(() => {
    mailBtn.classList.remove("copied");
  }, 2000);
});
