const cardContainer = document.getElementById("card-container");
const cardData = [
  {
    title: "hobby",
    price: "29",
    perks: [
      "250 subscribers",
      "5 team members",
      "5 metrics",
      "email notifications",
      "custom HTML",
    ],
    margin: "mt-20",
  },
  {
    title: "startup",
    price: "99",
    perks: [
      "1,000 subscribers",
      "10 team members",
      "10 metrics",
      "email/SMS/webhook notifications",
      "custom CSS",
      "status & authentication API",
      "Team Member SSO",
    ],
    margin: "-mt-12",
  },
  {
    title: "enterprice",
    price: "399",
    perks: [
      "5,000 subscribers",
      "25 team members",
      "25 metrics",
      "email/SMS/webhook notifications",
      "custom CSS/HTML/JS",
      "status & authentication API",
      "Team Member SSO",
      "component subscription",
      "yearly PO & invoicing avg",
    ],
    margin: "mt-5",
  },
];
const card = ({ title, price, perks, margin }) => {
  const m = perks
    .map((data) => ` <li class="text-lg capitalize font-thin">${data}</li> `)
    .join("");
  return `
  <div class="flex flex-col items-center p-6 pb-12 border shadow-[0_-2px_12px_1px] shadow-black/30 h-fit ${margin} hover:scale-105 transition-all duration-500">
    <h1 class="text-center text-4xl capitalize mb-6 font-medium" >${title}</h1>
    <p class="text-center ">
        <span class="text-5xl font-bold">$${price}</span>
        <br />
        <span class="text-2xl capitalize font-thin" >/month</span> 
    </p>
    <button class="px-5 py-2 text-2xl text-white bg-slate-900 rounded-md mt-6 mb-20 first-letter:uppercase font-light hover:scale-95 transition-all duration-300 shadow-xl">get started</button>
    <ul class="space-y-3 list-outside list-disc pl-10">
        ${m}
    </ul>
  </div>`;
};
console.log(cardContainer);
cardContainer.innerHTML = cardData.map((data) => card(data)).join("");
