import { speakerData, hotels, supporters, FAQ } from "../data/data.js";

// Display speakers
export function display() {
    const container = document.querySelector(".person-speakers");
    let content = "";
    for (let i = 0; i < speakerData.length; i++) {
        content += `
              <div class="speaker" data-aos="fade-up" data-aos-delay="50" data-aos-duration="800">
                  <div class="img">
                      <img src="${speakerData[i].img}" alt="${speakerData[i].name}">
                  </div>
                  <div class="info">
                      <h2><a href="../page/speaker_info.html?id=${i}">${speakerData[i].name}</a></h2>
                      <p>${speakerData[i].titel}</p>
                      <div class="links">
                          <a href="#"><i class="fa-brands fa-instagram"></i></a>
                          <a href="#"><i class="fa-brands fa-facebook"></i></a>
                          <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                      </div>
                  </div>
              </div>
              `;
    }
    container.innerHTML = content;
}

// Display Schedule
export function displaySchedule(arr) {
    const container = document.querySelector(".schedule .schedules");
    let content = "";
    for (let i = 0; i < arr.length; i++) {
        let [name, span] = arr[i].speaker.split(".");
        content += `
          <div class="item">
    <p>${arr[i].time}</p>
    <div class="info">
        ${arr[i].img ? `<img src="${arr[i].img}" alt="${name}">` : ""}
        <div class="text">
            ${span
                ? ` <h4>${name} <span>${span}</span></h4>`
                : ` <h4>${name}</h4>`
            }
            <p>${arr[i].content}</</p> </div> </div> </div> `;
    }
    container.innerHTML = content;
}

// Display Hotels
export function displayHotels() {
    const container = document.querySelector(".hotels .hotel");
    let content = "";
    for (let i = 0; i < hotels.length; i++) {
        content += `
          <div class="item" data-aos="fade-up" data-aos-delay="50" data-aos-duration="800">
              <div class="ineer">
                  <div class="img">
                      <img src="${hotels[i].img}" alt="hotels">
                  </div>
                  <div class="text">
                      <h3>${hotels[i].name}</h3>
                      <div class="stars">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                      </div>
                      <p>${hotels[i].disc}</p>
                  </div>
              </div>
          </div>
          `;
    }
    container.innerHTML = content;
}

// display supporters
export function displaysupporters() {
    const container = document.querySelector(".sponsors .sponsor");
    let content = "";
    for (let i = 0; i < supporters.length; i++) {
        content += `
          <div class="item" data-aos="fade-up" data-aos-delay="50" data-aos-duration="800">
              <div class="img">
                  <img src="${supporters[i]}" alt="supporters">
              </div>
          </div>
          `;
    }
    container.innerHTML = content;
}

// display FAQ
export function displayFAQ() {
    const container = document.querySelector(".question .questions");
    let content = "";
    for (let i = 0; i < FAQ.length; i++) {
        content += `
          <div class="accordion-item">
          <h2 class="accordion-header">
          <i class="fa-solid fa-chevron-up"></i>
              <i class="fa-solid fa-angle-down"></i> ${FAQ[i].question}
          </h2>
          <p class="accordion-body">
              ${FAQ[i].answer}
          </p>
      </div>
          `;
    }
    container.innerHTML = content;
}

// Display Speakers info 
export function getSpeakerInfo(id) {
    const container = document.getElementById("speaker");
    let { name, info, img } = speakerData[id]
    let [p1, p2, p3] = info.split("\n")
    document.title = name
    let content = `
    <div class="img">
        <div class="inner">
        <img src="${img}" alt="${name}">
        </div>
    </div>
    <div class="info">
        <div class="inner">
    <h3>${name}</h3>
    <div class=" links">
            <a title="link" href="#"><i class="fa-brands fa-instagram"></i></a>
            <a title="link" href="#"><i class="fa-brands fa-facebook"></i></a>
            <a title="link" href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a title="link" href="#"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
        <p>${p1.trim()}</p>
        <p>${p2.trim()}</p>
        <p>${p3.trim()}</p>
    </div>
    </div>
    `
    console.log(img)
    container.innerHTML = content
}