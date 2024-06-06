const infoBar = document.getElementById("info-bar");
const infoData = [
  {
    icon: `
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      `,
    info: "30 min",
  },
  {
    icon: `
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />

`,
    info: "6 servings",
  },
  {
    icon: `
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />

`,
    info: "210 cals",
  },
];

infoBar.innerHTML = infoData
  .map(
    ({ icon, info }) => ` 
<li class="flex items-center space-x-1">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" class="size-8">
    ${icon}
    </svg>
    <p class="font-medium text-lg ">${info}</p>
</li> 
`,
  )
  .join("");
const ratingCntainer = document.getElementById("rating-container");
for (let i = 0; i < 5; i++) {
  ratingCntainer.innerHTML += `
    <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 fill-red-500 stroke-none">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
    </li> `;
}

const btnContainer = document.getElementById("btn-container");
const btnData = ["easy", "medium", "hard"];
btnContainer.innerHTML = btnData
  .map(
    (data, index) =>
      ` <button class="px-5 py-2  rounded-full ${index == 1 ? "bg-red-500 text-white shadow-xl shadow-red-400/30" : "bg-orange-50 ring-1 "} ring-orange-400 font-light capitalize transition-all duration-300 hover:scale-95" >${data}</button> `,
  )
  .join("");

const btns = btnContainer.querySelectorAll("button");
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < btns.length; i++) {
      if (i == index) {
        btn.classList.replace("bg-orange-50", "bg-red-500");
        btn.classList.add("text-white", "shadow-xl", "shadow-red-400/30");
        btn.classList.remove("ring-1");
      } else {
        btns[i].classList.replace("bg-red-500", "bg-orange-50");
        btns[i].classList.add("ring-1");
        btns[i].classList.remove(
          "text-white",
          "shadow-red-400/30",
          "shadow-xl",
        );
      }
    }
  });
});

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const foodCrl = document.getElementById("food-crl");
const foodData = [
  {
    img: "https://images.pexels.com/photos/1591226/pexels-photo-1591226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "crispy crouton salad",
  },
  {
    img: "https://images.pexels.com/photos/6947303/pexels-photo-6947303.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "pancakes with yogurt",
  },
  {
    img: "https://images.pexels.com/photos/1407346/pexels-photo-1407346.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "crispy and creamy doughnuts",
  },
  {
    img: "https://images.pexels.com/photos/4940719/pexels-photo-4940719.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "perfect spinach salad",
  },
  {
    img: "https://images.pexels.com/photos/5713732/pexels-photo-5713732.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Grilled Chicken Caesar Salad",
  },
  {
    img: "https://images.pexels.com/photos/18431672/pexels-photo-18431672/free-photo-of-pizza-margherita-cut-in-four.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Margherita Pizza",
  },
  {
    img: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Cheeseburger",
  },
];

foodCrl.innerHTML = foodData
  .map(
    ({ name, img }) => ` 
  <li class="flex-none w-[150px] flex flex-col items-center justify-center space-y-3 hover:border px-3 py-8 rounded-lg border-dashed cursor-pointer transition-all duration-300 border-orange-400/50 bg-red-50/50 hover:scale-95 hover:shadow-lg">
    <div class="size-20 rounded-full overflow-hidden">
        <img src="${img}" class="object-cover w-full h-full" />
    </div>
    <p class="text-center text-sm" >${name}</p>
  </li> `,
  )
  .join("");
const oneLi = foodCrl.querySelector("li");

leftBtn.addEventListener("click", () => (foodCrl.scrollLeft -= 150));

rightBtn.addEventListener("click", () => (foodCrl.scrollLeft += 150));
