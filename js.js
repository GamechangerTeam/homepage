const licensesInfo = [
  {
    name: "Бесплатный",
    content: `
                      <p class="licenses__settings--item1">
                        Тариф доступен всем пользователям
                      </p>
                      <span
                        class="vertical-line licenses__settings--item2"
                      ></span>
                      <p class="licenses__settings--item3">
                        Диск 5 ГБ
                        <span class="little-text">
                          Без общего диска для компаний
                        </span>
                      </p>
                      <span
                        class="vertical-line licenses__settings--item4"
                      ></span>
                      <p class="licenses__settings--item5">
                        Бесплатно за всех пользователей
                      </p>
                  `,
  },
  {
    name: "Базовый",
    content: `
                      <p class="licenses__settings--item1">
                        До 5 пользователей
                      </p>
                      <span
                        class="vertical-line licenses__settings--item2"
                      ></span>
                      <p class="licenses__settings--item3">
                        Диск 24 ГБ
                        <span class="little-text">
                          Без общего диска для компаний
                        </span>
                      </p>
                      <span
                        class="vertical-line licenses__settings--item4"
                      ></span>
                      <p class="licenses__settings--item5">
                        9&nbsp;000₸/мес <br>
                        86&nbsp;400₸/год
                      </p>
                  `,
  },
  {
    name: "Стандартный",
    content: `
                      <p class="licenses__settings--item1">
                        До 50 пользователей
                      </p>
                      <span
                        class="vertical-line licenses__settings--item2"
                      ></span>
                      <p class="licenses__settings--item3">
                        Диск 100 ГБ

                      </p>
                      <span
                        class="vertical-line licenses__settings--item4"
                      ></span>
                      <p class="licenses__settings--item5">
                        24&nbsp;000₸/мес <br>
                        230&nbsp;400₸/год
                      </p>
                  `,
  },
  {
    name: "Профессиональный",
    content: `
                      <p class="licenses__settings--item1">
                        До 100 пользователей
                      </p>
                      <span
                        class="vertical-line licenses__settings--item2"
                      ></span>
                      <p class="licenses__settings--item3">
                        Диск 1 ТБ
              
                      </p>
                      <span
                        class="vertical-line licenses__settings--item4"
                      ></span>
                      <p class="licenses__settings--item5">
                        45&nbsp;000₸/мес <br>
                        432&nbsp;000₸/год
                      </p>
                  `,
  },
  {
    name: "Энтерпрайз",
    content: `
                      <p class="licenses__settings--item1">
                        от 250 пользователей
                      </p>
                      <span
                        class="vertical-line licenses__settings--item2"
                      ></span>
                      <p class="licenses__settings--item3">
                        Диск 3 ТБ
        
                      </p>
                      <span
                        class="vertical-line licenses__settings--item4"
                      ></span>
                      <p class="licenses__settings--item5">
                        100&nbsp;000₸/мес
                      </p>
              `,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  //  ЭЛЕМЕНТ ДЛЯ ЗАДЕРЖКИ МЕЖДУ НАЖАТИЕМ КНОПОК
  let ready = true;

  // ТАРИФЫ
  const toTarifsBtns = document.querySelectorAll(".to_tarifs-block");
  // ДОП. БЛОКИ СЛЕВА
  const leftSection = document.querySelectorAll(".slideIn_left");
  const openLeftSection = document.querySelectorAll(".open_left_section");
  const hideLeftSection = document.querySelectorAll(".hide_left_section");
  const cases_all = document.querySelector(".cases_all");

  // ПОПАП
  const popup__contact_us = document.querySelector(".popup__contact_us");

  // КОНСУЛЬТАЦИЯ
  const consultation_Page = document.querySelector(".consultation");

  // ПОЛИТИКА КОНФ.
  const privacyPolicy_Page = document.querySelector(".privacy-policy");

  //  ОБСЛУЖИВАНИЕ
  const service_Page = document.querySelector(".service");

  // КАРТОЧКИ ТАРИФА
  const tarifsList = document.querySelector(".tarifs-block__list");

  const tarifs_background = document.querySelector(".tarifs-block__background");

  // ПЕРЕКЛЮЧАТЕЛЬ СЛАЙДОВ НА БЛОКЕ МОДУЛЕЙ
  const toggler = document.querySelector(
    ".modulesBlockSwiper-navigation__toggler"
  );
  // FAQ
  const faq_list = document.querySelector(".faq__list");

  // ПЕРЕХОД К ТАРИФАМ
  toTarifsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      mainSlider.moveTo(5);
    });
  });

  // ОТКРЫТИЕ ТАРИФА КАК ПОПАП
  function openPopup(item) {
    let parentBlockPosition = item.offsetTop;
    let popup = item.querySelector(".item__wrapper");
    let content = item.querySelector(".item__header").nextElementSibling;

    if (!tarifs_background.classList.contains("active")) {
      tarifs_background.classList.add("active"); // включаем темный фон

      // Поднимаем блок вверх
      item.style.position = "static";
      item.style.height = `${popup.offsetHeight}px`;
      popup.style.position = "absolute";
      popup.style.top = `${parentBlockPosition}px`;

      setTimeout(() => {
        popup.classList.add("active");
        popup.style.top = "20px";
      }, 20);

      // Раскрываем блок
      setTimeout(() => {
        content.style.maxHeight = content.scrollHeight + "px";
      }, 300);
    }
  }
  popup__contact_us.addEventListener("click", (e) => {
    let content = e.target.closest(".popup__contact_us__container");
    let close = e.target.closest(".popup__contact_us--close");
    if ((!content || close) && ready) {
      ready = false;
      popup__contact_us.classList.toggle("active");
      setTimeout(() => {
        ready = true;
      }, 300);
    }
  });

  // Функция для закрытия блока
  function closePopup(item) {
    let parentBlockPosition = item.offsetTop;
    let popup = item.querySelector(".item__wrapper");
    let content = item.querySelector(".item__header").nextElementSibling;

    if (tarifs_background.classList.contains("active")) {
      // Сворачиваем блок
      content.style.maxHeight = null;

      // Опускаем блок вниз
      setTimeout(() => {
        popup.style.top = `${parentBlockPosition}px`;
        tarifs_background.classList.remove("active");
      }, 300);

      setTimeout(() => {
        popup.classList.remove("active");
      }, 600);
    }
  }

  // Обработчик кликов по элементам

  tarifsList?.addEventListener("click", (e) => {
    let item = e.target.closest(".item");
    let itemHeader = e.target.closest(".item__header");
    if (item.id === "individual") return;
    let licensesBtn = e.target.closest(".change-licenses-tarif");
    // const icon = item.querySelector(".plus-icon");
    const icon = item.querySelector(".pain__arrow");

    if (licensesBtn) {
      document
        .querySelector(".change-licenses-tarif.active")
        .classList.remove("active");
      let licensesWrapper = item.querySelector(".licenses__settings");
      let itemMain = item.querySelector(".item__main");
      let dataInfo = licensesBtn.getAttribute("data-name");
      licensesBtn.classList.add("active");
      const findedLicenses = licensesInfo.find((x) => x.name === dataInfo);
      licensesWrapper.innerHTML = "";
      licensesWrapper.innerHTML = findedLicenses.content;
      licensesWrapper.style.maxHeight = licensesWrapper.scrollHeight + "px";
      itemMain.style.maxHeight = itemMain.scrollHeight + "px";
    } else if (itemHeader) {
      icon.classList.toggle("active");
      ready = false;

      let content = item.querySelector(".item__header").nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }

      // icon.classList.toggle("active");
      // ready = false;
      // if (window.innerWidth >= 1200) {
      //   !tarifs_background.classList.contains("active")
      //     ? openPopup(item)
      //     : closePopup(item);
      // } else {
      //   let content = item.querySelector(".item__header").nextElementSibling;

      //   if (content.style.maxHeight) {
      //     content.style.transition = ".7s";
      //     content.style.maxHeight = null;
      //   } else {
      //     content.style.transition = "1s";
      //     content.style.maxHeight = content.scrollHeight + "px";
      //   }
      // }

      // setTimeout(() => {
      //   ready = true;
      // }, 500);
    }
  });

  const painBlockCard = document.querySelectorAll(".pain__card__header");

  painBlockCard.forEach((header) => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const arrow = header.querySelector(".pain__arrow");
      if (body.style.maxHeight) {
        body.style.maxHeight = null;
        arrow.classList.remove("active");
      } else {
        body.style.maxHeight = body.scrollHeight + "px";
        arrow.classList.add("active");
      }
    });
  });

  const loadImages = (section) => {
    const images = section.querySelectorAll("img[data-src]");

    if (images) {
      images.forEach((img) => {
        img.setAttribute("src", img.getAttribute("data-src"));
        img.removeAttribute("data-src");
      });
    }
  };

  // ДОБАВИТЬ АКТИВНЫЙ КЛАСС ДЛЯ ЛЕВОЙ СЕКЦИИ
  const addClassToSection = (name) => {
    switch (name) {
      case "consultation":
        loadImages(consultation_Page);
        consultation_Page.classList.toggle("active");
        break;
      case "privacy-policy":
        privacyPolicy_Page.classList.toggle("active");
        break;
      case "service":
        loadImages(service_Page);
        service_Page.classList.toggle("active");
        break;
      case "casesAll":
        loadImages(cases_all);
        cases_all.classList.toggle("active");
        break;
    }
  };

  // ОТКРЫТЬ СЕКЦИЮ
  openLeftSection.forEach((btn) => {
    btn.addEventListener("click", () => {
      let sectionName = btn.getAttribute("data-name");
      btn.disabled = true;
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        btn.disabled = false;
      }, 500);
      leftSection.forEach((section) => {
        section.style.visibility = "visible";
        section.style.opacity = "1";
      });
      addClassToSection(sectionName);
    });
  });

  // ЗАКРЫТЬ СЕКЦИЮ
  hideLeftSection.forEach((btn) => {
    btn.addEventListener("click", () => {
      let sectionName = btn.getAttribute("data-name");
      addClassToSection(sectionName);
      document.body.style.overflow = "auto";
    });
  });

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

  // const mainSlider = new fullpage("#main", {
  //   scrollOverflow: true,
  //   scrolloverflowmacstyle: false,
  //   menu: "#menu",
  //   anchors: ["1", "2", "3", "4", "5", "6", "7", "8"],
  //   responsiveWidth: 1200,
  // });

  // СЛАЙДЕРЫ НА БЛОКЕ МОДУЛЕЙ
  const implementationBlockSwiper = new Swiper("#implementationBlockSwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      526: {
        slidesPerView: 5,
      },
    },
  });

  function animateCounters() {
    const counters = document.querySelectorAll(".counter");
    const duration = 500; // Длительность анимации в миллисекундах

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const format = counter.getAttribute("data-format");
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        let currentNumber = Math.floor(progress * target);

        if (format === "million") {
          currentNumber = currentNumber + " млн";
        } else if (format === "percent") {
          currentNumber = currentNumber + "%";
        }

        counter.textContent = currentNumber;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  animateCounters();
  const play_sound = document.querySelectorAll("button.case_with_review");

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

  // ЛОГИКА НУМЕРОВКИ ПРОБЛЕМ В БИТРИКСЕ
  const painNumbers = document.querySelectorAll(".pain__number");

  const painNumbers_URL = [
    "https://static.tildacdn.com/tild3538-3363-4233-b632-313536313161/num1.svg",
    "https://static.tildacdn.com/tild3466-3432-4536-b630-313734386666/num2.svg",
    "https://static.tildacdn.com/tild6339-6366-4133-a335-383938323465/num3.svg",
    "https://static.tildacdn.com/tild3533-3737-4862-a130-386439323039/num4.svg",
    "https://static.tildacdn.com/tild6165-3465-4561-b139-653037356135/num5.svg",
    "https://static.tildacdn.com/tild3366-6165-4937-a564-616633356261/num6.svg",
    "https://static.tildacdn.com/tild6562-3938-4535-a162-653030643261/num7.svg",
    "https://static.tildacdn.com/tild3937-6230-4632-b662-636330366465/num8.svg",
  ];

  painNumbers.forEach((num, index) => {
    num.src = painNumbers_URL[index];
  });

  const h1 = document.querySelector("h1");

  if (h1.offsetWidth === window.innerWidth - 20) {
    h1.style.fontSize = "22px";
    console.log(h1.offsetWidth, h1.offsetHeight);
  }
});
