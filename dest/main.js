// menu mobile
document.querySelector('.btnmenu').addEventListener('click', function () {
   if (this.classList.contains('clicked')) {
      this.classList.remove('clicked')
   } else {
      this.classList.add('clicked');
   }
   // this.classList.toggle ('clicked');

   document.querySelector('.menu').classList.toggle('active');
})



// language
let lang_option = document.querySelector('.lang__option');
document.querySelector('.lang__current').addEventListener('click', function (e) {
   e.stopPropagation();
   if (lang_option.classList.contains('active')) {
      lang_option.classList.remove('active')
   } else {
      lang_option.classList.add('active')
   }
})

document.body.addEventListener('click', function () {
   lang_option.classList.remove('active')
})

// lang_option.querySelectorAll('a').forEach((e, i) => {
//    e.addEventListener('click', function (e) {
//       e.preventDefault();
//       let text = this.innerText
//       document.querySelector('.lang__current span').innerText = text
//    })
// })

lang_option.querySelectorAll('a').forEach(function (theA, i) {
   theA.addEventListener('click', function (e) {
      e.preventDefault();
      let country = this.innerText;
      document.querySelector('.lang__current span').innerText = country;
   });
});

// slider
// let $sliderItems = document.querySelectorAll('.slider__item-wrap');
// let $sliderDots = document.querySelectorAll('.slider__bottom-paging--dotted li')
// let sliderCurrent = 0;
// let sliderNumber = document.querySelector('.slider__bottom-paging--number');
// document.querySelector('.slider .next').addEventListener('click', function(){
//    if(sliderCurrent < $sliderItems.length - 1){
//       sliderTo(sliderCurrent + 1);
//       // $sliderItems[sliderCurrent].classList.remove('active');
//       // $sliderItems[sliderCurrent + 1].classList.add('active');
//       // $sliderDots[sliderCurrent].classList.remove('is-selected');

//       // sliderCurrent++;    

//       // $sliderDots[sliderCurrent].classList.add('is-selected');
//    }

//    // sliderNumber.innerText = (sliderCurrent + 1).toString().padStart(2,'0');
// })

// document.querySelector('.slider .prev').addEventListener('click', function(){
//    if(sliderCurrent > 0){
//       sliderTo(sliderCurrent - 1);

//       // $sliderItems[sliderCurrent].classList.remove('active');
//       // $sliderItems[sliderCurrent - 1].classList.add('active');
//       // $sliderDots[sliderCurrent].classList.remove('is-selected');

//       // sliderCurrent--;

//       // $sliderDots[sliderCurrent].classList.add('is-selected');
//    }
//    // sliderNumber.innerText = (sliderCurrent + 1).toString().padStart(2,'0');
// })

// function sliderTo (to) {
//    $sliderItems[sliderCurrent].classList.remove('active');
//    $sliderItems[to].classList.add('active');
//    $sliderDots[sliderCurrent].classList.remove('is-selected');
//    $sliderDots[to].classList.add('is-selected');

//    sliderCurrent = to;

//    sliderNumber.innerText = (to + 1).toString().padStart(2,'0');
// }

// $sliderDots.forEach((e, i) => {
//    e.addEventListener('click', function () {
//       sliderTo(i);
//    })
// })

// Back to top
let $backToTop = document.querySelector('.back-to-top');
$backToTop.addEventListener('click', function (e) {
   e.preventDefault();
   window.scrollBy({
      top: -document.body.offsetHeight,
      behavior: 'smooth'
   })
})

window.addEventListener('scroll', function () {
   let scrollTop = document.querySelector('html').scrollTop;
   if (scrollTop > 700) {
      $backToTop.classList.add('bttblock')
   } else {
      $backToTop.classList.remove('bttblock')
   }
})

// Menu scroll đổi màu
let $sliderElement = document.querySelector('.slider');
let $header = document.querySelector('header');
window.addEventListener('scroll', function () {
   let scrollTop = document.querySelector('html').scrollTop;
   if (scrollTop > $sliderElement.offsetHeight - $header.offsetHeight) {
      $header.classList.add('headercolor');
   } else {
      $header.classList.remove('headercolor');
   }
})

// video model
let iframeVideo = document.querySelector('#video-iframe');
// let videoTag = document.querySelector('.popup-video video');
document.querySelectorAll('.videos .play__button').forEach((e) => {
   e.addEventListener('click', function (e) {
      e.stopPropagation();
      let videoSrc = this.getAttribute('data-video-src');
      // iframeVideo.setAttribute('src', 'https://www.youtube.com/embed/' + videoSrc);
      iframeVideo.src = 'https://www.youtube.com/embed/' + videoSrc;
      // videoTag.play();
      document.querySelector('.popup-video').classList.add('videoflex')

   })
})
document.body.addEventListener('click', function () {
   iframeVideo.src = ''
   document.querySelector('.popup-video').classList.remove('videoflex')
})
document.querySelector('.popup-video .close').addEventListener('click', function () {
   document.querySelector('.popup-video').classList.remove('videoflex');
   iframeVideo.src = ''
   // videoTag.pause();
})


// form

var $input;

function onInputFocus(event) {
   var $target = $(event.target);
   var $parent = $target.parent();
   $parent.addClass('input--filled');
};

function onInputBlur(event) {
   var $target = $(event.target);
   var $parent = $target.parent();

   if (event.target.value.trim() === '') {
      $parent.removeClass('input--filled');
   }
};

$(document).ready(function () {
   $input = $('.input__field');

   // in case there is any value already
   $input.each(function () {
      if ($input.val().trim() !== '') {
         var $parent = $input.parent();
         $parent.addClass('input--filled');
      }
   });

   $input.on('focus', onInputFocus);
   $input.on('blur', onInputBlur);
});

// scrollActiveMenu jquery

// function scrollActiveMenu(nameSection) {

//    let scrollTop = $(window).scrollTop();
//    let sectionTop = $(nameSection).position().top;
//    let sectionHeight = $(nameSection).outerHeight();
//    if (scrollTop + 100 > sectionTop && scrollTop + 100 < sectionHeight + sectionTop) {
//       $('[data-section="' + nameSection + '"]').addClass('active');
//    } else {
//       $('[data-section="' + nameSection + '"]').removeClass('active');
//    }
// }

// let $menu = $('.menu li a');
// let arrSection = [];
// for (let i = 0; i < $menu.length; i++) {
//    let s = $($menu[i]).attr('data-section');

//    arrSection.push(s);
// }
// console.log(arrSection);
// $(window).on('scroll', function () {
//    for (let i = 0; i < arrSection.length; i++) {
//       scrollActiveMenu(arrSection[i]);
//    }

//    // scrollActiveMenu('#products');
//    // scrollActiveMenu('#video');
//    // scrollActiveMenu('#intro');
//    // scrollActiveMenu('#about');
//    // scrollActiveMenu('#gallery');
//    // scrollActiveMenu('#news');
//    // scrollActiveMenu('#photos');
// })
// $(window).trigger('scroll');



// scrollActiveMenu javascript
let menus = document.querySelectorAll('.menu li a');
let sections = [];
menus.forEach(function (e, index) {
   let nameSection = e.getAttribute('href').replace('#', '');
   let section = document.querySelector('.homepage > .' + nameSection);
   sections.push(section);
   // Bấm vào menu scroll đến section
   e.addEventListener('click', function (event) {
      event.preventDefault();
      window.scrollTo({
         top: section.offsetTop - document.querySelector('header').offsetHeight + 3,
         'behavior': 'smooth'
      })
   })

});
window.addEventListener('scroll', function () {
   let posScroll = window.pageYOffset;
   sections.forEach(function (section, index) {
      if (posScroll > section.offsetTop - document.querySelector('header').offsetHeight) {
         menus.forEach(function (item) {
            item.classList.remove('active');
         });
         menus[index].classList.add('active');
      }
   });
});


// slider jquery
let $slider = $('.slider__item').flickity({
   // options
   cellAlign: 'left',
   contain: true,
   pageDots: true,
   prevNextButtons: false,
   on: {
      ready: function () {
         $('.slider__bottom-paging').append($('.slider .flickity-page-dots'))
      }
   }
});

$slider.on('change.flickity', function (event, index) {
   $('.slider__bottom-paging--number').text((index + 1).toString().padStart(2, '0'))

});
$('.slider .prev').on('click', function () {
   $slider.flickity('previous');
})
$('.slider .next').on('click', function () {
   $slider.flickity('next');
})



// Bấm vào menu scroll đến section
// $('header .container-fuild .menu li a').on('click', function (e) {
//    e.preventDefault();
//    $([document.documentElement, document.body]).animate({
//       scrollTop: $($(this).data('section')).offset().top
//    }, 400);
// });



// scroll xuống ẩn menu, scroll lên hiện menu jquery
let prevScroll = $('html').scrollTop();

$(document).scroll(function () {

   if (prevScroll < window.pageYOffset) {
      $('header').css({
         top: -$('header').height(),
         transition: 'all 0.4s ease-in-out'
      });
   } else {
      $('header').css({
         top: 0,
         transition: 'all 0.4s ease-in-out'
      });
   }
   prevScroll = window.pageYOffset;
});


// gallery
var initPhotoSwipeFromDOM = function (gallerySelector) {
   var parseThumbnailElements = function (el) {
      var thumbElements = el.childNodes,
         numNodes = thumbElements.length,
         items = [],
         figureEl,
         linkEl,
         size,
         item;
      for (var i = 0; i < numNodes; i++) {
         figureEl = thumbElements[i]; // <figure> element
         if (figureEl.nodeType !== 1) {
            continue;
         }
         linkEl = figureEl.children[0]; // <a> element
         size = linkEl.getAttribute('data-size').split('x');
         item = {
            src: linkEl.getAttribute('href'),
            w: parseInt(size[0], 10),
            h: parseInt(size[1], 10)
         };
         if (figureEl.children.length > 1) {
            item.title = figureEl.children[1].innerHTML;
         }
         if (linkEl.children.length > 0) {
            // <img> thumbnail element, retrieving thumbnail url
            item.msrc = linkEl.children[0].getAttribute('src');
         }
         item.el = figureEl; // save link to element for getThumbBoundsFn
         items.push(item);
      }
      return items;
   };
   var closest = function closest(el, fn) {
      return el && (fn(el) ? el : closest(el.parentNode, fn));
   };
   var onThumbnailsClick = function (e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      var eTarget = e.target || e.srcElement;
      var clickedListItem = closest(eTarget, function (el) {
         return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
      });
      if (!clickedListItem) {
         return;
      }
      var clickedGallery = clickedListItem.parentNode,
         childNodes = clickedListItem.parentNode.childNodes,
         numChildNodes = childNodes.length,
         nodeIndex = 0,
         index;
      for (var i = 0; i < numChildNodes; i++) {
         if (childNodes[i].nodeType !== 1) {
            continue;
         }
         if (childNodes[i] === clickedListItem) {
            index = nodeIndex;
            break;
         }
         nodeIndex++;
      }
      if (index >= 0) {
         openPhotoSwipe(index, clickedGallery);
      }
      return false;
   };
   var photoswipeParseHash = function () {
      var hash = window.location.hash.substring(1),
         params = {};
      if (hash.length < 5) {
         return params;
      }
      var vars = hash.split('&');
      for (var i = 0; i < vars.length; i++) {
         if (!vars[i]) {
            continue;
         }
         var pair = vars[i].split('=');
         if (pair.length < 2) {
            continue;
         }
         params[pair[0]] = pair[1];
      }
      if (params.gid) {
         params.gid = parseInt(params.gid, 10);
      }
      return params;
   };
   var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
      var pswpElement = document.querySelectorAll('.pswp')[0],
         gallery,
         options,
         items;
      items = parseThumbnailElements(galleryElement);
      options = {
         galleryUID: galleryElement.getAttribute('data-pswp-uid'),
         getThumbBoundsFn: function (index) {
            var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
               pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
               rect = thumbnail.getBoundingClientRect();

            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
         },
         showAnimationDuration: 0,
         hideAnimationDuration: 0
      };
      if (fromURL) {
         if (options.galleryPIDs) {
            for (var j = 0; j < items.length; j++) {
               if (items[j].pid == index) {
                  options.index = j;
                  break;
               }
            }
         } else {
            options.index = parseInt(index, 10) - 1;
         }
      } else {
         options.index = parseInt(index, 10);
      }
      if (isNaN(options.index)) {
         return;
      }
      if (disableAnimation) {
         options.showAnimationDuration = 0;
      }
      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
   };
   var galleryElements = document.querySelectorAll(gallerySelector);
   for (var i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].setAttribute('data-pswp-uid', i + 1);
      galleryElements[i].onclick = onThumbnailsClick;
   }
   var hashData = photoswipeParseHash();
   if (hashData.pid && hashData.gid) {
      openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
   }
};

$(window).load(function () {
   initPhotoSwipeFromDOM('.gallery__grid');
});


// photos

function photoSlide() {
   let $carouselCard = $(".photos");

   $carouselCard.flickity({
      contain: true,
      wrapAround: false,
      freeScroll: true,
      cellAlign: 'left',
      lazyLoad: 4,
      imagesLoaded: true,
      prevNextButtons: false,
      pageDots: false
   });
}

photoSlide();

