import { displaySchedule, getSpeakerInfo, displaysupporters, displayFAQ, display, displayHotels } from "./display.js"
import { schedule } from "../data/data.js";

const speakersInfo = document.getElementById("speakersInfo");
const mainPage = document.getElementById("mainPage")
const navbar = document.getElementById("navbar");
const toggleBtn = document.getElementById("nav-btn");
const menu = document.getElementById("menu");
const links = [...document.querySelectorAll(".nav-link")];
const videoClose = document.getElementById("videoClose");
const modelClose = document.getElementById("model-close");
const video = document.getElementById("video");
const iframe = document.querySelector(".iframe");
const play = document.querySelector(".play");
const buySelection = document.querySelector(".buySelection");
const daysSchedule = [...document.querySelectorAll(".days h3")];
const imgsGallery = [...document.querySelectorAll(".venue .gallary .item img")];
const buyBtn = [...document.querySelectorAll("button.buy")];
const planPrice = document.getElementById("plan");
const goToTop = document.getElementById("goToTop");
const load = document.getElementById("load");

// Open & Close Navbar
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
  menu.classList.toggle("active");
  if (toggleBtn.className.includes("open")) {
    toggleBtn.className = "fa-solid fa-xmark toggel open close";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
    toggleBtn.className = "fa-solid fa-bars toggel";
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    toggleBtn.className = "fa-solid fa-bars toggel";
    document.body.style.overflow = "auto";
  });
});

// Go To Top
window.addEventListener("scroll", () => {
  let conditon = window.scrollY
  if (conditon > 100) {
    goToTop.style.visibility = "visible"
    goToTop.style.opacity = "1"
  } else {
    goToTop.style.visibility = "hidden"
    goToTop.style.opacity = "0"
  }
})

goToTop.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
})

if (mainPage) {
  display();
  displaySchedule(schedule.day1);
  displayHotels();
  displaysupporters();
  displayFAQ();
  const accordion = [...document.querySelectorAll(".accordion-item h2")];

  // Change Active Link
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Navbar Change Color
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = "var(--dark-bg)";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  });

  // Play Close Video
  play.addEventListener("click", () => {
    video.play();
    iframe.classList.add("active");
  });

  videoClose.addEventListener("click", () => {
    video.pause();
    iframe.classList.remove("active");
  });

  // Scroll TO section
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = e.target.getAttribute("href")
      const sectionOffset = document.querySelector(sectionId).offsetTop - 65;
      scroll({
        top: sectionOffset,
        behavior: "smooth"
      });
    })
  })

  // Change Active Link On Scroll
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    links.forEach(link => {
      if (!link.getAttribute("href")) return
      let section = document.querySelector(link.getAttribute("href"))
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }
  window.addEventListener("scroll", navbarlinksActive)
  document.addEventListener("scroll", navbarlinksActive)

  // Change Schedule Day
  daysSchedule.forEach((day) => {
    day.addEventListener("click", () => {
      let key = day.getAttribute("data-day");
      daysSchedule.forEach((day) => {
        day.classList.remove("active");
      });
      day.classList.add("active");
      displaySchedule(schedule[key]);
    });
  });

  // img gallery Control
  function gallary(arr) {
    const imgView = document.getElementById("view");
    const closeImgView = document.getElementById("close");
    const nextImg = document.getElementById("next");
    const prevImg = document.getElementById("prev");
    const activeImg = document.getElementById("activeImg");
    let index = 0;
    arr.forEach((img) => {
      img.addEventListener("click", () => {
        const src = img.src;
        index = arr.indexOf(img);
        activeImg.src = src;
        imgView.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    });

    closeImgView.addEventListener("click", () => {
      imgView.classList.remove("active");
      document.body.style.overflow = "auto";
    });
    nextImg.addEventListener("click", next);
    prevImg.addEventListener("click", prev);
    function next() {
      index === 7 ? (index = 0) : index++;
      let src = arr[index].src;
      activeImg.src = src;
    }
    function prev() {
      index === 0 ? (index = 7) : index--;
      let src = arr[index].src;
      activeImg.src = src;
    }
  }
  gallary(imgsGallery);

  // Accordion Control
  accordion.forEach((el) => {
    el.addEventListener("click", () => {
      if (el.parentElement.classList.contains("active")) {
        el.parentElement.classList.remove("active");
      } else {
        accordion.forEach((el) => {
          el.parentElement.classList.remove("active");
        });
        el.parentElement.classList.add("active");
      }
    });
  });

  // Model Price Plan Control 
  buyBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      buySelection.classList.add("active");
      document.body.style.overflow = "hidden";
      const options = [...planPrice.children];
      options.forEach((option) => {
        if (option.value === btn.title) {
          option.setAttribute("selected", "selected");
        }
      });
    });
  });

  modelClose.addEventListener("click", () => {
    buySelection.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Loading Screen
  window.addEventListener("load", () => {
    setTimeout(() => {
      load.children[0].style.opacity = 0
      setTimeout(() => {
        load.style.opacity = 0
        setTimeout(() => {
          load.remove()
        }, 0)
      }, 300)
    }, 2900)
  })
}

// speakers Info
if (speakersInfo) {
  let id = new URL(location.href).searchParams.get("id")
  getSpeakerInfo(id)
}













// // valdtion
// let userName = document.getElementById("name");
// let email = document.getElementById("userEmail");
// let inputParent = document.querySelectorAll(".buySelection .model .body .input");
// let emailDiv = inputParent[1]
// let nameDiv = inputParent[0]
// function valdtion(regex, input, parent, [success, failed]) {
//     const value = input.value;
//     const result = regex.test(value);
//     input.parentNode.removeChild(input.nextSibling);
//     result ? valid(input, success, parent) : notValid(input, failed, parent);
// }

// function valid(input, msg, parent) {
//     const p = document.createElement("p");
//     p.textContent = msg;
//     p.style.cssText = `
//   background-color: #daffda;
//   padding: 10px;
//   font-size: 15px;
//   border-radius: 10px;
//   font-family: 'Roboto';
//   font-weight: 700;`;
//     input.parentNode.insertBefore(p, input.nextSibling);
//     parent.classList.add("valid");
//     parent.classList.remove("notValid");
// }

// function notValid(input, msg, parent) {
//     const p = document.createElement("p");
//     p.textContent = msg;
//     p.style.cssText = `
//       background-color: rgb(255 218 218);
//       padding: 10px;
//       font-size: 15px;
//       border-radius: 10px;
//       font-family: 'Roboto';
//       font-weight: 700;`;
//     input.parentNode.insertBefore(p, input.nextSibling);
//     parent.classList.add("notValid");
//     parent.classList.remove("valid");
// }

// userName.addEventListener("blur", function () {
//     let regex = /^[a-zA-Z]{3,15}$/;
// });

// email.addEventListener("blur", function () {
//     let regex = /^[a-z0-9\.-_]+@[a-z]+\.(com|net|org)$/gi;
// });
