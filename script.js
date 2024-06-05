const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");

let word = "hello world".split("");
document.querySelector("div").innerHTML = word
  .map((data) => {
    return `
    ${
      data == " "
        ? `<br />`
        : ` <p class="letter -mx-4 inline-block">${data}</p>`
    }
   `;
  })
  .join("");

let tween = gsap.from(".letter", {
  y:40,
  opacity: 0,
  duration: 2,
  stagger: {
    each: 0.3,
    from: "start",
    grid: "auto",
  },
});
play.addEventListener("click", () => {
  tween.restart();
});
