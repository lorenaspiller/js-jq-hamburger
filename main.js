/*
Hamburger menu:
mostrare / nascondere il menu principale
(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
*/
var hamburgerMenu = $(".hamburger-menu");
var hamburger = $(".header-right > a");
var close = $(".close");

hamburger.click(
  function () {
    hamburgerMenu.show(1500);
  }
);


close.click(
  function () {
    hamburgerMenu.hide(1500);
  }
);
