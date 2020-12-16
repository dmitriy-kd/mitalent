$(document).ready(function(){
  $('.quot-slider').slick({
	autoplay: true, //включить автоперелистывание
	autoplaySpeed: 1500, // изменить скорость автоперелистывания
	speed: 1800, // изменить скорость воспроизведения анимации 
	/* centerMode: true, // что то связанное с центральным позиционированием картинки */
	/* centerPadding: '15px', // размер отступов работает с centerMode */
	dots: true, // включить точки снизу слайдера
	arrows: false, // отключить стрелки слайдера */
	/*draggable: false, // отменить возможность ручной прокрутки*/
	/*pauseOnHover: false, // отменить паузу прокрутки при наведеннии мышки на слайдер*/
	/*pauseOnDotsHover: true,	// включить паузу прокрутки при наведении мышки на точки*/
	/*cssEase: '' // изменение анимации */
	/*fade: true // эффект анимации выцветание */
	/*vertical: true //вертикальная прокрутка*/
	/*rows: 2 // для отображения в несколько строк */
	/*slidesPerRow: 2 // сколько должно отображаться слайдов в одной строке */
	/*slidesToShow: 2, // сколько слайдов мы можем видеть одновременно*/
	/*slidesToScroll: 2 // значение сколько слайдов прокручивает слайдер за раз*/
	/*z-index: // с этим все понятно */
	/*asNavFor: '.slider_2' // свойство для синхронизации слайдеров
	// свойство для адаптивной верстки
	/*responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
  }]*/
  });
});
