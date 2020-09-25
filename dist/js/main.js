$(function(){
  
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/slider-arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/slider-arrow-right.svg" alt=""></button>',
        responsive: [
          {
            breakpoint: 969,
            settings: {
              arrows: false
            }
          }
        ]
    });
 // Для поиска на JS на JQ конечно код покороче....но на JS интересне :0)
    const heart = document.querySelectorAll('.product-item__favorite'),
    //const heart = document.querySelector('.product-item__favorite');
          tab = document.querySelectorAll('.tab'),
          tabContent = document.querySelectorAll('.tabs-content'),
          tabsItemParent = document.querySelector('.search__tabs'),
          productItem = document.querySelectorAll('.product-item'),
          prodItemWrap = document.querySelectorAll('.product-item__wrapper'),
          prodItemPrice = document.querySelectorAll('.product-item__price'),
          notifyText = document.querySelectorAll('.product-item__notify-text'),
          basket = document.querySelectorAll('.product-item__basket'),
          prodItemTitle = document.querySelectorAll('.product-item__title');


// метод наподобие siblings на JS
/* function siblings(elem) {
  return Array.from(elem.parentNode.children).filter(el => el !== elem);
} */

    /* function hideTabs() {
      tab.forEach(tab => {tab.classList.remove('tab--active');});
      tabContent.forEach(tab => {tab.classList.remove('tabs-content--active');});
    } 
    
    function showTabs(index = 0) {
      tab[index].classList.add('tab--active');
      tabContent[index].classList.add('tabs-content--active');
    }

    tabsItemParent.addEventListener('click', (event, i) => {
       event.preventDefault();
       if(event.target && event.target.classList.contains('tab')){
        tab.forEach((el, i) => {
          if(event.target === el){
              hideTabs();showTabs(i);
           }
        });  
      } 
    }); */

    $('.tab').on('click', function(event){
       event.preventDefault();
       $($(this).siblings()).removeClass('tab--active');
       $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
       $(this).addClass('tab--active');
       $($(this).attr('href')).addClass('tabs-content--active');
       $('.product-slider').slick('setPosition');
    });


// на jquery обработчик для выделения карточек (сердце)
   /*  $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite--active');
      }); */
// на JS обработчки для всех сердец и для одного
   function ciclesForelems(elem1, elem2) {
    elem1.forEach(elem => {
      elem.addEventListener('click', (event) => {
          elem.classList.toggle('product-item__favorite--active');
      });
    });
    elem2.forEach(el => {
      el.addEventListener('click', (event) => {
        event.preventDefault();
      });
    });
   }
   ciclesForelems(heart, productItem);
  /* document.querySelector('.product-item__favorite').addEventListener('click', function (){
    document.querySelector('.product-item__favorite').classList.toggle('product-item__favorite--active');
  }); */
  /* $('.product-item').hover(function() {
       $('.product-item__price').css('color', '#1C62CD');
  });
  $('.product-item').mouseleave(function() {
    $('.product-item__price').css('color', '#2F3035');
  }); */
  /* function aviableORNo(){
    $('.product-item__wrapper').each(() => {
      if($('.product-item__wrapper').hasClass('product-item__wrapper') && $('.product-item__wrapper').hasClass('product-item__not-aviable')){
        $('.product-item__price').css('display', 'none');
        $('.product-item__notify-text').css('display', 'block');
        $('.product-item__basket').css('display', 'none');
        $('.product-item__notify-link').css('display', 'block');
        $('.product-item__title').css('padding-bottom:', '13px');
      } else {
        $('.product-item__price').css('display', 'block');
      }
   });
  }
  aviableORNo(); */
  // на JS -->
  /* function aviableORNo(){
    prodItemWrap.forEach(el => {
      if(el.classList.contains('product-item__not-aviable')){
       prodItemPrice.forEach(el => {el.style.display = 'none';});
       notifyText.forEach(el => {el.style.display = 'block';});
       basket.forEach(el => {el.style.display = 'none';});
       document.querySelectorAll('.product-item__notify-link').forEach(element => {
         element.style.display = 'block';
       });
       prodItemTitle.forEach(e => {e.style.cssText = `
       padding-bottom: 13px;`;});
      } else {
        prodItemPrice.forEach(el => {el.style.display = 'block';});
      }
   });
  }
  aviableORNo(); */
  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="img/slider-arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="img/slider-arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', (e) => {
     $(e.target).toggleClass('filter__item-drop--active');
     $(e.target).next().slideToggle('200');
  });
  
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
  });

  $('.catalog__filter-btngrid').on('click', function () {
     $(this).addClass('catalog__filter-button--active');
     $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
     $('.product-item__wrapper').removeClass('product-item__wrapper--list');
     $('.product-slider__item').width('auto');
  });
  
  $('.catalog__filter-btnline').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
    $('.product-slider__item').width('100%');
  });

  /* if($('.product-item__wrapper').hasClass('product-item__wrapper--list')){
    $('.product-slider__item').css('width:', '100%');
  } */

  $(".rate-yo").rateYo({
    rating: 3.6,
    spacing   : "7px",
    ratedFill: "#1C62CD",
    normalFill: "#C4C4C4"
  });

  $('.menu__btn').on('click', function() {
      $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });
  //для адаптива уменьшеный мобильный баннер
  let mobileBanner = document.querySelector('.banner__link img');
  let showmobileBanner = (element) => {
      window.addEventListener('resize', function () {
        if (window.innerWidth < 400) {
          element.src = '../img/mobile-banner.png';
        } else if (window.innerWidth >= 400) {
          element.src = '../img/content/banner.jpg';
        }
      });   
  };
  showmobileBanner(mobileBanner);

  
  $('.footer__topdrop').on('click', function () {
      $(this).next().slideToggle();
      $(this).toggleClass('footer__topdrop--active');
  });

  function dispBlock () {
      window.addEventListener('resize', (e) => {
          if(window.innerWidth >= 540){
            document.querySelectorAll('.footer-list').forEach(el => {
               el.style.display = 'block';
            });
          } else {
            document.querySelectorAll('.footer-list').forEach(el => {
              el.style.display = 'none';
           });
          }
      });
  }
  dispBlock();  
  /* $('.footer__topdrop').on('click', function () {
    if (window.innerWidth < 540) {
      $(this).next().slideToggle();
      $(this).toggleClass('footer__topdrop--active');
    }
  });
  $(window).addEventListener('resize', (e) => {
    if (window.innerWidth >= 540) {
      $('.footer-list').css('display:', 'block');
    }
  }); */

  $('.aside__btn').on('click', function(){
    $(this).next().slideToggle();
  });

  

});



         
         