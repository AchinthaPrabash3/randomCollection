const navBar = document.getElementById("nav-bar");
const navData = [
  "free designs",
  "license",
  "articles",
  "contributions",
  "about",
];

navBar.innerHTML = navData
  .map(
    (data, index) =>
      `<li class="px-2 py-1 rounded-full hover:bg-slate-300 transition-all duration-300 cursor-pointer capitalize text-slate-600 ">${data}</li>`
  )
  .join("");
const navElements = navBar.querySelectorAll("li");
navElements.forEach((elemnt, index) => {
  elemnt.addEventListener("click", () => {
    for (let i = 0; i < navElements.length; i++) {
      if (i == index) {
        elemnt.classList.add("bg-slate-300", "text-indigo-900", "shadow-xl");
      } else {
        navElements[i].classList.remove(
          "bg-slate-300",
          "text-indigo-900",
          "shadow-xl"
        );
      }
    }
  });
});

const filterOptions = document.getElementById("filter-options");
const optionsData = [
  "Free designs",
  "mobile designs",
  "desktop designs",
  "populer designs",
];
filterOptions.innerHTML = optionsData.map(
  (data, i) =>
    ` <option value="${data}" ${i == 0 ? "selected" : ""} >${data}</option> `
);

const btnContainer = document.getElementById("btn-container");
const btns = btnContainer.querySelectorAll("button");
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    for (let j = 0; j < btns.length; j++) {
      if (j == i) {
        btn.classList.add("shadow-lg");
        btn.classList.remove("border");
      } else {
        btns[j].classList.remove("shadow-lg");
        btns[j].classList.add("border");
      }
    }
  });
});

const catagoryContainer = document.getElementById("catogory-container");
const categories = ["all", "web", "mobile", "UI kit", "coded"];
catagoryContainer.innerHTML = categories
  .map(
    (categorie, index) =>
      ` <li class="capitalize ${
        index == 0 ? "text-indigo-700" : "text-slate-700"
      } cursor-pointer lg:text-base text-sm">${categorie}</li> `
  )
  .join("");

const icons = [
  "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
  "https://cdn-icons-png.flaticon.com/128/732/732244.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968559.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968520.png",
];
const iconContainer = document.getElementById("platforms");
iconContainer.innerHTML = icons
  .map(
    (icon, i) => ` 
  <div class="size-14 flex items-center justify-center rounded-full ${
    i == 0 ? "border shadow-lg" : ""
  } transition-all duration-300 cursor-pointer">
    <img class="size-8" src="${icon}"/>
  </div> `
  )
  .join("");

const categoryLiElm = catagoryContainer.querySelectorAll("li");
categoryLiElm.forEach((elm, index) => {
  elm.addEventListener("click", () => {
    for (let i = 0; i < categoryLiElm.length; i++) {
      if (index == i) {
        elm.classList.replace("text-slate-700", "text-indigo-700");
        console.log(elm);
      } else {
        categoryLiElm[i].classList.remove("text-indigo-700");
        categoryLiElm[i].classList.add("text-slate-700");
      }
    }
  });
});

const platformIconElemets = iconContainer.querySelectorAll("div");
platformIconElemets.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    for (let i = 0; i < platformIconElemets.length; i++) {
      if (index == i) {
        icon.classList.add("shadow-lg", "border");
      } else {
        platformIconElemets[i].classList.remove("shadow-lg", "border");
      }
    }
  });
});

const cardContainer = document.getElementById("card-container");
const cardData = [
  {
    profile:
      "https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "jenny molla",
    view_count: "54",
    like_count: "20",
    tags: "new",
    platform: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
    img: "https://miro.medium.com/v2/resize:fit:2000/1*TEjMGT3zZKz2MaAZBZkXhw.png",
  },
  {
    profile:
      "https://images.pexels.com/photos/4926612/pexels-photo-4926612.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Achintha prabash",
    view_count: "54",
    like_count: "20",
    tags: "new",
    platform: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
    img: "https://mastercaweb.unistra.fr/wp-content/uploads/2022/08/5726865-edited-scaled.jpg",
  },
  {
    profile:
      "https://images.pexels.com/photos/1661861/pexels-photo-1661861.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "venuri thimasha",
    view_count: "54",
    like_count: "20",
    tags: "new",
    platform: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
    img: "https://uizard.io/blog/content/images/2023/06/graphical_user_interfaces.webp",
  },
];
const card = ({
  name,
  view_count,
  like_count,
  tags,
  platform,
  profile,
  img,
}) => {
  return `
  <div class="pb-5 rounded-xl shadow-lg border hover:scale-[0.98] transition-all duration-300">
    <div class="p-2 relative h-[300px]">
      <div class="border size-12 rounded-full flex items-center justify-center absolute  top-4 left-4 bg-white shadow-md">
        <img src="${platform}" class="  size-8" />
      </div>
      <img src="${img}" class=" h-full w-full object-cover rounded-xl" />
    </div>
    <div>
       <div class="px-4 flex justify-between items-center">
    <div class="flex items-center space-x-3">
      <img src="${profile}" class="size-10 rounded-full object-cover" alt="" />
      <h2 class="space-x-1 capitalize"><span class="font-thin">by</span><span class="capitalize font-bold"> ${name} </span></h2>
    </div>
    <div class="flex items-center space-x-4">
      <div class="flex items-center space-x-1 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <p class="font-thin">${like_count}</p>
      </div>
      <div class="flex items-center space-x-1 like cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        <p class="font-thin">${view_count}</p>
      </div>
    </div>
  </div>
    <div>

    </div>
    </div>
  </div>`;
};
cardContainer.innerHTML = cardData.map((data) => card(data)).join("");
const likes = cardContainer.querySelectorAll(".like");
likes.forEach((like) => {
  let svg = like.querySelector("svg");
  like.addEventListener("click", () => {
    svg.classList.toggle("fill-red-500");
    svg.classList.toggle("stroke-red-500");
  });
});
