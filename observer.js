if (!window.matchMedia("(max-width: 850px)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("education-container-item-show");
      }
      // else {
      //   entry.target.classList.remove("education-container-item-show");
      // }
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
} else {
  const hiddenElements = document.querySelectorAll(".education-container-item");
  const projectLink = document.querySelectorAll(".project-link");

  hiddenElements.forEach((element) => {
    element.classList.add("education-container-item-show");
  });
  projectLink.forEach((element) => {
    element.classList.add("project-link-show");
  });
}

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

const cardDot = document.querySelectorAll(".card-dot");
const pisularestLink = document.querySelector(".pisularest-link");
const fidogastLink = document.querySelector(".fidogast-link");
const breakoutLink = document.querySelector(".breakout-link");
const serwiserLink = document.querySelector(".serwiser-link");

pisularestLink.addEventListener("click", (e) => {
  const pisularestCard = document.querySelector(".pisularest-card");
  const cardBackground = document.querySelector(".card-background-1");
  pisularestCard.classList.add("card-visible");
  pisularestLink.classList.add("link-hidden");

  cardDot.forEach((element) => {
    element.addEventListener("click", (event) => {
      pisularestCard.classList.remove("card-visible");
      pisularestLink.classList.remove("link-hidden");
    });
  });

  cardBackground.addEventListener("click", (event) => {
    pisularestCard.classList.remove("card-visible");
    pisularestLink.classList.remove("link-hidden");
  });
});

fidogastLink.addEventListener("click", (e) => {
  const fidogastCard = document.querySelector(".fidogast-card");
  const cardBackground = document.querySelector(".card-background-2");
  fidogastCard.classList.add("card-visible");
  fidogastLink.classList.add("link-hidden");

  cardDot.forEach((element) => {
    element.addEventListener("click", (event) => {
      fidogastCard.classList.remove("card-visible");
      fidogastLink.classList.remove("link-hidden");
    });
  });

  cardBackground.addEventListener("click", (event) => {
    fidogastCard.classList.remove("card-visible");
    fidogastLink.classList.remove("link-hidden");
  });
});

breakoutLink.addEventListener("click", (e) => {
  const breakoutCard = document.querySelector(".breakout-card");
  const cardBackground = document.querySelector(".card-background-3");
  breakoutCard.classList.add("card-visible");
  breakoutLink.classList.add("link-hidden");

  cardDot.forEach((element) => {
    element.addEventListener("click", (event) => {
      breakoutCard.classList.remove("card-visible");
      breakoutLink.classList.remove("link-hidden");
    });
  });

  cardBackground.addEventListener("click", (event) => {
    breakoutCard.classList.remove("card-visible");
    breakoutLink.classList.remove("link-hidden");
  });
});

serwiserLink.addEventListener("click", (e) => {
  const serwiserCard = document.querySelector(".serwiser-card");
  const cardBackground = document.querySelector(".card-background-4");
  serwiserCard.classList.add("card-visible");
  serwiserLink.classList.add("link-hidden");

  cardDot.forEach((element) => {
    element.addEventListener("click", (event) => {
      serwiserCard.classList.remove("card-visible");
      serwiserLink.classList.remove("link-hidden");
    });
  });

  cardBackground.addEventListener("click", (event) => {
    serwiserCard.classList.remove("card-visible");
    serwiserLink.classList.remove("link-hidden");
  });
});
