const walter = document.getElementById("heisenberg");
const imgElement = document.querySelector(".img");
const text = document.getElementById("text");
const languageButton = document.getElementById("languageButton");

let isGeorgian = false;

let languageArr = [
  {
    ka: "თქვი ჩემი სახელი",
    en: "Say My Name",
  },
  {
    ka: "დარწმუნებული ხარ?",
    en: "Are You Sure?",
  },
  {
    ka: "მართალი ხარ",
    en: "You're Goddamn Right",
  },
];

function toggleLanguage() {
  isGeorgian = !isGeorgian;
  const currentText = text.textContent;

  const translation = languageArr.find(
    (item) => item[isGeorgian ? "en" : "ka"] === currentText
  );

  if (translation) {
    text.textContent = translation[isGeorgian ? "ka" : "en"];
  }

  languageButton.textContent = isGeorgian ? "EN" : "KA";
}

function handleInputChange() {
  walter.value = walter.value.toUpperCase();
}

walter.addEventListener("input", handleInputChange);

languageButton.addEventListener("click", toggleLanguage);

function myFunction() {
  const heisenberg = walter.value.trim();

  if (heisenberg === "HEISENBERG") {
    imgElement.src = "images/you-are-goddamn-right.jpg";
    if (isGeorgian) {
      text.textContent = " შენ მართალი ხარ";
    } else {
      text.textContent = "You're Goddamn Right";
    }
    text.style.fontSize = "28px";
  } else {
    imgElement.src = "images/are-you-sure.jpg";
    if (isGeorgian) {
      text.textContent = "დარწმუნებული ხარ?";
      languageButton.textContent = "EN";
    } else {
      text.textContent = "Are You Sure?";
      languageButton.textContent = "KA";
    }
  }
}

document.getElementById("submit").addEventListener("click", myFunction);