window.addEventListener("DOMContentLoaded", () => {
    let bg = document.querySelector(".main");
    let hends = document.querySelector(".main__hends");

    window.addEventListener("scroll", function () {
        let valueY = window.scrollY;

        hends.style.marginTop = valueY * 0.55 + "px";
        bg.style.marginTop = valueY * 0.2 + "px";
    });

    let hamburger = document.querySelector(".hamburger");
    menu = document.querySelector(".header__items");
    body = document.querySelector("body");
    const toggleMenu = () => {
        menu.classList.toggle("header__items__active");
        hamburger.classList.toggle("hamburger__active");
        body.classList.toggle("body__active");
    };

    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();

        toggleMenu();
    });
    document.addEventListener("click", (e) => {
        let target = e.target;
        let its_menu = target == menu || menu.contains(target);
        let its_hamburger = target == hamburger;
        let menu_is_active = menu.classList.contains("menu_active");

        if (!its_menu && !its_hamburger && menu_is_active) {
            toggleMenu();
        }
    });

    let order = document.querySelector(".btn-order");
    modal = document.querySelector(".modal__product");
    back = document.querySelector(".btn-back");
    cencel = document.querySelector(".btn-cencel");
    cencelPrice = document.querySelector(".btn-cencel-price");
    btnNext = document.querySelector(".btn-next");
    result = document.querySelector(".modal__result");
    btnPrice = document.querySelector(".btn-go");
    price = document.querySelector(".modal__price");

    order.addEventListener("click", () => {
        header.style.opacity = 1;
        modal.classList.add("modal__product-active");
        body.style.overflowY = "hidden";
    });
    back.addEventListener("click", () => {
        modal.classList.remove("modal__product-active");

        body.style.overflowY = "auto";
        uncheck();
    });

    cencel.addEventListener("click", () => {
        result.classList.remove("modal__result-active");
        modal.classList.add("modal__product-active");
    });
    btnPrice.addEventListener("click", () => {
        price.classList.add("modal__price-active");
        result.classList.remove("modal__result-active");
    });
    cencelPrice.addEventListener("click", () => {
        price.classList.remove("modal__price-active");
        result.classList.add("modal__result-active");
    });

    let header = document.querySelector(".header");
    window.onscroll = function () {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll > 50 && scroll < 750) {
            header.style.opacity = 0;
        } else if (scroll >= 800 || scroll < 50) {
            header.style.opacity = 1;
            header.style.position = "fixed";
        } else {
            header.style.position = "static";
            header.style.opacity = 0;
        }
    };

    btnNext.addEventListener("click", () => {
        result.classList.add("modal__result-active");
        modal.classList.remove("modal__product-active");

        chuice();
    });

    const checkbox = document.querySelectorAll(".product__list");
    quantity = document.querySelectorAll(".quantity");
    let checkboxArray = Array.prototype.slice.call(checkbox);
    quantityArr = Array.prototype.slice.call(quantity);

    console.log(quantity);

    function chuice() {
        let left = document.querySelectorAll(".product__checkbox");
        right = document.querySelectorAll(".number");

        resultArr = [];

        for (let i = 0; i < checkboxArray.length; i++) {
            if (left[i].checked) {
                resultArr.push(
                    `<div class="position"><p>${left[i].value}</p><p class="position__number"> ${right[i].value}</p><p>${quantityArr[i].innerHTML}</p></div>`
                );
                document.querySelector(".result").innerHTML = resultArr.join(
                    ""
                );
            }
        }
    }

    let btnCheck = document.querySelector(".btn-check");
    btnUnCheck = document.querySelector(".btn-uncheck");

    btnCheck.addEventListener("click", () => check());
    btnUnCheck.addEventListener("click", () => uncheck());

    function check() {
        let check = document.querySelectorAll("input");

        for (let i = 0; i < check.length; i++) {
            if (check[i].type == "checkbox" || check[i].type == "number") {
                check[i].checked = true;
            }
        }
    }

    function uncheck() {
        let uncheck = document.querySelectorAll("input");
        for (let i = 0; i < uncheck.length; i++) {
            if (uncheck[i].type == "checkbox") {
                uncheck[i].checked = false;
            }
        }
    }
    /////////////  tab   //////
});
let tabs = document.querySelectorAll(".job__card-title");
let cards = document.querySelectorAll(".job__wrap");

tabs.forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        let tabId = item.getAttribute("href");
        let carrentTab = document.querySelector(tabId);
        if (!item.classList.contains("job__card-title-active")) {
            tabs.forEach((child) => {
                child.classList.remove("job__card-title-active");
            });

            cards.forEach((child) => {
                child.classList.remove("job__wrap-active");
            });
            item.classList.add("job__card-title-active");
            carrentTab.classList.add("job__wrap-active");
        }
    });
    document.querySelector(".job__card-title:nth-child(2)").click();
});
