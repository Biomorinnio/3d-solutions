const burgerOpen = document.querySelectorAll('.header__icons-burger');

burgerOpen[0].addEventListener('click', ()=>{
  document.querySelector('.burger__menu').classList.add('active')
})

burgerOpen[1].addEventListener('click', ()=>{
  document.querySelector('.burger__menu').classList.remove('active')
})

const burgerBtn = document.querySelector('.burger__menu-btn');

burgerBtn.addEventListener('click', ()=>{
  burgerBtn.classList.toggle('active')
})



var swiper = new Swiper(".mySwiper-start", {});
var swiper2 = new Swiper(".mySwiper-advantages", {});
var swiper3 = new Swiper(".mySwiper-services", {

  breakpoints: {
    // when window width is >= 320px
    1681: {
      slidesPerView: 3,
    spaceBetween: 50,
    },
    1601:{
      slidesPerView: 3,
    spaceBetween: 30,
    },
    1441:{
      slidesPerView: 3,
    spaceBetween: 15,
    },
    1367:{
      slidesPerView: 3,
    spaceBetween: 20,
    },
    1281:{
      slidesPerView: 3,
    spaceBetween: 20,
    },
    1025:{
      slidesPerView: 3,
      spaceBetween: 20,
    },
    861:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
  
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    
  
  }
})

const startPagination= document.querySelectorAll(".start__pagination-line");


swiper.on("slideChange", function () {
  for (let i = 0; i < startPagination.length; i++) {
    startPagination[i].classList.remove("active");
  }
  startPagination[swiper.activeIndex].classList.add("active");
});

for (let i = 0; i < startPagination.length; i++) {
  startPagination[i].addEventListener("click", () => {
    for (let j = 0; j < startPagination.length; j++) {
      if (i != j) startPagination[j].classList.remove("active");
    }

    while (swiper.activeIndex < i && swiper.previousIndex <= i)
      swiper.slideNext();
    if (swiper.previousIndex == undefined)
      while (swiper.activeIndex < i && i != 0) swiper.slideNext();
    while (swiper.activeIndex > i && swiper.previousIndex >= i)
      swiper.slidePrev();
  });
}
const advantagesPagination = document.querySelectorAll(".advantages__pagination-line");


swiper2.on("slideChange", function () {
  for (let i = 0; i < advantagesPagination.length; i++) {
    advantagesPagination[i].classList.remove("active");
  }
  advantagesPagination[swiper2.activeIndex].classList.add("active");
});

for (let i = 0; i < advantagesPagination.length; i++) {
  advantagesPagination[i].addEventListener("click", () => {
    for (let j = 0; j < advantagesPagination.length; j++) {
      if (i != j) advantagesPagination[j].classList.remove("active");
    }
    

    while (swiper2.activeIndex < i && swiper2.previousIndex <= i)
      swiper2.slideNext();
    if (swiper2.previousIndex == undefined)
      while (swiper2.activeIndex < i && i != 0) swiper2.slideNext();
    while (swiper2.activeIndex > i && swiper2.previousIndex >= i)
      swiper2.slidePrev();
  });
}
const servicesPagination = document?.querySelectorAll(".services__pagination-line");
const servicesPaginationTablet = document?.querySelectorAll(".services__paginationTablet-line");
const servicesPaginationMobile = document?.querySelectorAll(".services__paginationMobile-line");


if(window.matchMedia('(min-width: 1025px)').matches){

  swiper3.on("slideChange", function () {
    for (let i = 0; i < servicesPagination.length; i++) {
      servicesPagination[i].classList.remove("active");
    }
    servicesPagination[swiper3.activeIndex].classList.add("active");
  });
  
  for (let i = 0; i < servicesPagination.length; i++) {
    servicesPagination[i].addEventListener("click", () => {
      for (let j = 0; j < servicesPagination.length; j++) {
        if (i != j) servicesPagination[j].classList.remove("active");
      }
      
  
      while (swiper3.activeIndex < i && swiper3.previousIndex <= i)
        swiper3.slideNext();
      if (swiper3.previousIndex == undefined)
        while (swiper3.activeIndex < i && i != 0) swiper3.slideNext();
      while (swiper3.activeIndex > i && swiper3.previousIndex >= i)
        swiper3.slidePrev();
    });
  }
 
}

if(window.matchMedia('(min-width: 861px)').matches){
  
  swiper3.on("slideChange", function () {
    for (let i = 0; i < servicesPaginationTablet.length; i++) {
      servicesPaginationTablet[i].classList.remove("active");
    }
    servicesPaginationTablet[swiper3.activeIndex].classList.add("active");
  });
  
  for (let i = 0; i < servicesPaginationTablet.length; i++) {
    servicesPaginationTablet[i].addEventListener("click", () => {
      for (let j = 0; j < servicesPaginationTablet.length; j++) {
        if (i != j) servicesPaginationTablet[j].classList.remove("active");
      }
      
  
      while (swiper3.activeIndex < i && swiper3.previousIndex <= i)
        swiper3.slideNext();
      if (swiper3.previousIndex == undefined)
        while (swiper3.activeIndex < i && i != 0) swiper3.slideNext();
      while (swiper3.activeIndex > i && swiper3.previousIndex >= i)
        swiper3.slidePrev();
    });
  }

}
if(window.matchMedia('(min-width: 0px)').matches){
  swiper3.on("slideChange", function () {
    for (let i = 0; i < servicesPaginationMobile.length; i++) {
      servicesPaginationMobile[i].classList.remove("active");
    }
    servicesPaginationMobile[swiper3.activeIndex].classList.add("active");
  });
  
  for (let i = 0; i < servicesPaginationMobile.length; i++) {
    servicesPaginationMobile[i].addEventListener("click", () => {
      for (let j = 0; j < servicesPaginationMobile.length; j++) {
        if (i != j) servicesPaginationMobile[j].classList.remove("active");
      }
      
  
      while (swiper3.activeIndex < i && swiper3.previousIndex <= i)
        swiper3.slideNext();
      if (swiper3.previousIndex == undefined)
        while (swiper3.activeIndex < i && i != 0) swiper3.slideNext();
      while (swiper3.activeIndex > i && swiper3.previousIndex >= i)
        swiper3.slidePrev();
    });
  }
}


