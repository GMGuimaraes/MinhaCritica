
var swiper = new Swiper('.swiper-container',{
    slidesPerView: 7,
    spaceBetween: 40,
    slidesPerGroup: 3,
    loop: true,
    freemode: true,
    loopFillGroupWithBlank: true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
         nextE1: '.swiper-button-next',
         prevE1: '.swiper-button-prev',
    },
});
