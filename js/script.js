// Burger

let burgerIcon = document.querySelector('.icon-menu')
let burgerList = document.querySelector('.burger__list')

burgerIcon.addEventListener('click', () => {
   if (burgerIcon) {
      if (burgerIcon.classList.contains('active')) {
         burgerIcon.classList.remove('active')
         burgerList.classList.remove('active')
         document.body.classList.remove('_lock')
         return
      }
      burgerIcon.classList.add('active')
      burgerList.classList.add('active')
      document.body.classList.add('_lock')
   }
})

// Swiper

new Swiper('.swiper', {
   loop: true,
   spaceBetween: 32,
   slidesPerView: 2,
   pagination: {
      el: '.swiper-pagination',
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
})
