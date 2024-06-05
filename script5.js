const rating = document.getElementById("rating-stars");
for (let i = 0; i < 5; i++) {
  rating.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6 ${i < 3 ? "fill-black stroke-none" : "fill-slate-200 stroke-gray-400"}">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
`;
}
const likeBtn = document.getElementById("like-btn");
likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("fill-red-500");
  likeBtn.classList.toggle("scale-95");
});

const ratingCount = document.getElementById("rating-count");
const ratingData = [
  {
    rating: "5",
    count: "28%",
  },
  {
    rating: "4",
    count: "0%",
  },
  {
    rating: "3",
    count: "14%",
  },
  {
    rating: "2",
    count: "28%",
  },
  {
    rating: "1",
    count: "28%",
  },
];
const card = ({ rating, count }) => {
  return ` 
  <li class="flex w-full items-center space-x-2 hover:scale-95 transition-all duration-300 cursor-pointer ">
  <div class="flex items-center space-x-1 flex-none">
  <span class="text-xl">${rating}</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-blue-950 stroke-none ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
  </div>
  <div class="grow h-2 overflow-hidden bg-slate-100 shadow-inner rounded-full relative before:absolute before:h-full before:w-[${count}] before:bg-gradient-to-r before:from-sky-400 before:to-blue-500  before:rounded-full ">
  </div>
  <p class="font-thin text-slate-400 w-[32.047px]">${count}</p>
  </li> `;
};

ratingCount.innerHTML = ratingData.map((data) => card(data)).join("");
