const burgerFun = () => {
  const navbar = document.querySelector(".nav-item");
  const burger = document.querySelector(".burger");
  
  burger.addEventListener("click", () => {
    navbar.classList.toggle("burger-active");

  });
};
burgerFun();
