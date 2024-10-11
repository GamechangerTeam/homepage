//  ЭЛЕМЕНТ ДЛЯ ЗАДЕРЖКИ МЕЖДУ НАЖАТИЕМ КНОПОК
let ready = true;
const video = document.getElementById("video");
// ВИДЕО
const preloader = document.querySelector("#logo_preloader");
// ДОП. БЛОКИ СЛЕВА
const leftSection = document.querySelectorAll(".slideIn_left");
const openLeftSection = document.querySelectorAll(".open_left_section");
const hideLeftSection = document.querySelectorAll(".hide_left_section");
const consultation_Page = document.querySelector(".consultation");
const cases_all = document.querySelector(".cases_all");

// // ЛОГИКА УДАЛЕНИЯ ПРЕЛОУДЕРА ПРИ ЗАГРУЗКЕ ВИДЕО
video.addEventListener("canplaythrough", function () {
  preloader.style.display = "none";
});

const loadImages = () => {
  const images = cases_all.querySelectorAll("img[data-src]");

  if (images) {
    images.forEach((img) => {
      img.setAttribute("src", img.getAttribute("data-src"));
      img.removeAttribute("data-src");
    });
  }
};

// ЗАКРЫТЬ СЕКЦИЮ
hideLeftSection.forEach((btn) => {
  btn.addEventListener("click", () => {
    consultation_Page.classList.remove("active");
    cases_all.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

window.addEventListener("scroll", () => {
  const trust = document.querySelector(".trust");
  const trustPosition = trust.getBoundingClientRect().top;
  const partner = document.querySelector(".partner");
  const partnerPosition = partner.getBoundingClientRect().top;

  const free = document.querySelector(".free");
  const comfort = document.querySelector(".comfort");

  // Проверяем, когда блок находится на самом верху или выше
  if (partnerPosition <= 0 && window.innerWidth > 768) {
    comfort.classList.remove("hidden");
    free.classList.add("hidden");
  } else if (trustPosition <= 0 && window.innerWidth > 768) {
    free.classList.remove("hidden");
    comfort.classList.add("hidden");
  } else {
    comfort.classList.add("hidden");
    free.classList.add("hidden");
  }
});

// FAQ
const faq_list = document.querySelector(".faq__list");
// ОТКРЫТИЕ КАРТОЧЕК В FAQ
faq_list.addEventListener("click", (e) => {
  const card = e.target.closest(".faq__card");
  if (card) {
    const main = card.querySelector(".faq__main");
    const icon = card.querySelector(".plus-icon");
    if (main.style.maxHeight) {
      main.style.maxHeight = null;
      icon.classList.toggle("active");
    } else {
      main.style.maxHeight = main.scrollHeight + "px";
      icon.classList.toggle("active");
    }
  }
});

document.getElementById("checkBtn").addEventListener("click", function () {
  // Находим все чекбоксы с именем 'option'
  const checkboxes = document.querySelectorAll(
    'input[name="function"]:checked'
  );
  let selected = [];

  // Собираем значения выбранных чекбоксов
  checkboxes.forEach((checkbox) => {
    let label = checkbox.nextElementSibling;
    let text = label.querySelector(".price_text");
    selected.push(text.textContent);
  });

  const input = consultation_Page.querySelector("#comments");
  input.value = selected.join(", ");
});

const consultation__form = document.querySelectorAll(".consultation__form");

consultation__form.forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Останавливает отправку формы
    let submitBtn = form.querySelector(".submit-btn");

    if (submitBtn) {
      e.preventDefault();
      const name = form.querySelector("#name_inp").value;
      const number = form.querySelector("#num_inp").value;
      const comments = form.querySelector("#comments").value;
      if (name && number) {
        submitBtn.querySelector("svg").style.opacity = 1;
        submitBtn.querySelector("span").innerText = "";
        const res = await sendForm(name, number, comments);
        if (res) {
          submitBtn.disabled = true;
          submitBtn.querySelector("svg").style.opacity = 0;
          submitBtn.querySelector("span").innerText = "Отправлено!";
          console.log("Форма отправлена!", res, name, number, comments);
        }
      }
    }
  });
});

// const submitBtns = document.querySelectorAll(".submit-btn");
// submitBtns.forEach(btn => {
//   btn.addEventListener("click", async (e) => {

//     const name = btn.getElementById("name_inp").value;
//     console.log("🚀 ~ submit.addEventListener ~ name:", name);
//     const number = document.getElementById("num_inp").value;
//     const comments = document.getElementById("comments").value;
//     if (name && number) {
//       console.log("🚀 ~ submit.addEventListener ~ name:", name);
//       submit.querySelector("svg").style.opacity = 1;
//       submit.querySelector("span").innerText = "";
//       const res = await sendForm(name, number, comments);
//       console.log("🚀 ~ submit.addEventListener ~ name:", name);
//       if (res) {
//         submit.disabled = true;
//         submit.querySelector("svg").style.opacity = 0;
//         submit.querySelector("span").innerText = "Отправлено!";
//       }
//     }
//   });
// })

// const lenis = new Lenis();

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

const url = "https://gamechanger.bitrix24.kz/rest/1026/o2wh86f2zi524mww/";
const readyUrl =
  "https://gamechanger.bitrix24.kz/rest/1026/o2wh86f2zi524mww/crm.lead.add.json";

// ОТКРЫТЬ СЕКЦИЮ
openLeftSection.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.disabled = true;
    setTimeout(() => {
      btn.disabled = false;
    }, 500);
    const dataName = btn.getAttribute("data-name");
    console.log("🚀 ~ btn.addEventListener ~ name:", name);
    document.body.style.overflow = "hidden";
    // lenis.stop()
    if (dataName !== "casesAll") {
      consultation_Page.style.visibility = "visible";
      consultation_Page.style.opacity = "1";
      consultation_Page.classList.toggle("active");
    } else {
      cases_all.classList.toggle("active");
      cases_all.style.visibility = "visible";
      cases_all.style.opacity = "1";
      loadImages();
    }
  });
});

const partners_swiper = new Swiper("#partners_swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  grid: {
    rows: 2,
  },

  breakpoints: {
    526: {
      spaceBetween: 0,
      slidesPerView: 5,
      grid: {
        rows: 2,
      },
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const trustUs = new Swiper("#trustUs", {
  // direction: "horizontal",
  spaceBetween: 20,
  slidesPerGroup: 2,
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
    },

    526: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
  },
  pagination: {
    el: ".trustUs_container-pagination",
  },

  navigation: {
    nextEl: ".trustUs_container-button-next",
    prevEl: ".trustUs_container-button-prev",
  },
});

const sendForm = async (name, number, comments) => {
  const data = {
    fields: {
      TITLE: `${name} / ${number}`,
      COMMENTS: comments,
    },
    params: { REGISTER_SONET_EVENT: "Y" },
  };
  try {
    const req = await fetch(readyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // const req = await fetch(`${readyUrl}/?name=${name}&phone=${number}&functions=${comments}`)

    const res = await req.json();
    if (res.result) {
      console.log("Сделка успешно создана с ID:", res.result);
      return true;
    } else {
      console.log("Ошибка при запросе:");
      return false;
    }
  } catch (error) {
    console.error("ошибка", error);
    return false;
  }
};

const play_sound = document.querySelectorAll("button.case_with_review");
const audio = [
  {
    name: "marten",
    src: "https://dl.dropbox.com/scl/fi/uo6l39zoas1dpemyu2kyt/martinstal.ogg?rlkey=fgnfqellg787dvuhsylbrwm2a&st=mv2r1qo6&dl=0",
  },
  {
    name: "aibolit",
    src: "https://dl.dropbox.com/scl/fi/0v16dzup0ri5nu05b62sk/Aibolit.ogg?rlkey=hdcuvg2ncotid53nd3yxpssnz&st=r8fgvsyx&dl=0",
  },
];

play_sound.forEach((btn) => {
  btn.addEventListener("click", function () {
    let name = btn.getAttribute("data-name");
    const audioPlayers = document.querySelectorAll("audio");
    const thisPLayer = Array.from(audioPlayers).find(
      (player) => player.getAttribute("data-name") === name
    );
    let playBtn = btn.querySelector(".play_button");
    let pauseBtn = btn.querySelector(".pause_button");
    if (thisPLayer.paused) {
      audioPlayers.forEach((x) => {
        x.pause();
        play_sound.forEach((btn) => {
          btn.querySelector(".play_button").style.opacity = 1;
          btn.querySelector(".pause_button").style.opacity = 0;
        });
      });
      thisPLayer.play();
      playBtn.style.opacity = 0;
      pauseBtn.style.opacity = 1;
    } else {
      thisPLayer.pause();
      playBtn.style.opacity = 1;
      pauseBtn.style.opacity = 0;
    }
  });
});

// Находим контейнер слайдов
const partnersSwiper_container = document.getElementById("partners_swiper");
const partnersSwiper =
  partnersSwiper_container.querySelector(".swiper-wrapper");

// Кэшируем все слайды в их первоначальном порядке
const slides = Array.from(
  partnersSwiper.getElementsByClassName("swiper-slide")
);

// Порядок слайдов при разрешении больше 525px
const desktopOrder = [0, 1, 2, 3, 4];

// Порядок слайдов при разрешении 525px и меньше
const mobileOrder = [0, 2, 4, 1, 3];

// Функция для изменения порядка слайдов
function rearrangeSlides() {
  const windowWidth = window.innerWidth;

  // Очищаем контейнер слайдов
  partnersSwiper.innerHTML = "";

  // Определяем порядок слайдов в зависимости от ширины экрана
  const order = windowWidth > 525 ? desktopOrder : mobileOrder;

  // Вставляем слайды в новом порядке
  order.forEach((index) => {
    partnersSwiper.appendChild(slides[index].cloneNode(true));
  });
}

// Отслеживаем изменение размера окна
window.addEventListener("resize", rearrangeSlides);

// Запускаем перестановку при первой загрузке страницы
window.addEventListener("load", rearrangeSlides);
