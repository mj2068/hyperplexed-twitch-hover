console.log("main.js");

const subtitle = document.querySelector(".card-subtitle");

const createWord = (word, index) => {
  const spanWord = document.createElement("span");
  spanWord.innerHTML = word;
  spanWord.classList.add("card-subtitle-word");
  spanWord.style.transitionDelay = `${index * 40}ms`
  return spanWord;
};

const appendWord = (word, index) =>
  subtitle.appendChild(createWord(word, index));

const createSubtitle = (text) => text.split(" ").map(appendWord);

createSubtitle(
  "Veniam reprehenderit maxime minima nam quibusdam, tempora iure similique totam saepe possimus accusantium!"
);
