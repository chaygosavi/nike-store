const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.getElementsByClassName("menuItem");
const buyBtn = document.querySelector(".buyBtn");
const productBtn = document.querySelector(".productBtn");
const productDetails = document.querySelector(".productDetails");
// const navBottom = document.querySelector(".navBottom");
// navBottom.addEventListener("click", (e) => {
//   if (e.target.id === "") {
//     return;
//   }
//   wrapper.style.transform = `translateX(-${e.target.id}00vw)`;
//   wrapper.style.transition = `all .3s ease-in-out`;
// });

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 117,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 144,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 108,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 126,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 117,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");

sizes.forEach((size) => {
  size.addEventListener("click", () => {
    sizes.forEach((size) => {
      size.style.background = "transparent";
      size.style.color = "black";
    });
    size.style.background = "black";
    size.style.color = "white";
  });
});

let choosenProduct = products[0];

Array.from(menuItems).forEach((menuItem, idx) => {
  menuItem.addEventListener("click", () => {
    wrapper.style.transform = `translateX(-${idx}00vw)`;
    wrapper.style.transition = `all .3s ease-in-out`;

    choosenProduct = products[idx];

    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductTitle.textContent = choosenProduct.title.toUpperCase();
    currentProductPrice.textContent = "$" + choosenProduct.price;

    currentProductColors.forEach((color, idx) => {
      color.style.background = choosenProduct.colors[idx].code;
      color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[idx].img;
      });
    });
  });
});

productBtn.addEventListener("click", () => {
  document.querySelector(".payment").style.display = "flex";
});

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  document.querySelector(".payment").style.display = "none";
});