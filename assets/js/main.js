
var owl = $(".first-slider");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  animateOut: "fadeOut",
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [3000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

$('.blog-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:false,
  
  responsive:{
      390:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
$('.slider-icon').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:false,
  
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:4
      }
  }
})
const swiper = new Swiper(".product-slider", {
  navigation: {
    nextEl: '.product-button-next',
    prevEl: '.product-button-prev',
    
  },
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 4,
    }
  }
 
});

function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var w1 = 40;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var w2 = 40;
  var r2 = x2 + w2;
    
  if (r1 < x2 || x1 > r2) return false;
  return true;
  
}

// // slider call

$('#slider').slider({
range: true,
min: 0,
max: 500,
values: [ 75, 300 ],
slide: function(event, ui) {

$('.ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[ 0 ]);
$('.ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[ 1 ]);
$('.price-range-both').html('<i>$' + ui.values[ 0 ] + ' - </i>$' + ui.values[ 1 ] );

//

if ( ui.values[0] == ui.values[1] ) {
  $('.price-range-both i').css('display', 'none');
} else {
  $('.price-range-both i').css('display', 'inline');
}
    
    //

if (collision($('.price-range-min'), $('.price-range-max')) == true) {
  $('.price-range-min, .price-range-max').css('opacity', '0');	
  $('.price-range-both').css('display', 'block');		
} else {
  $('.price-range-min, .price-range-max').css('opacity', '1');	
  $('.price-range-both').css('display', 'none');		
}

}
});

$('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider').slider('values', 0 ) + ' - </i>' + $('#slider').slider('values', 1 ) + '</span>');

$('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider').slider('values', 0 ) + '</span>');

$('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider').slider('values', 1 ) + '</span>');

$('.hidden-icon-menu').click(function(e){
  e.preventDefault();
  document.querySelector('.mobile-menu').style.transform= "translateX(0px)";
  document.querySelector('.mobile-menu-overlay').style.transform="translate(0px)";
  document.querySelector('.mobile-menu-overlay').style.opacity="0.4";
})

$(".mobile-close-btn, .mobile-menu-overlay").click(function(e){
  e.preventDefault();
  document.querySelector('.mobile-menu').style.transform= "translateX(-400px)";
  document.querySelector('.mobile-menu-overlay').style.transform="translate(-200px)";
  document.querySelector('.mobile-menu-overlay').style.opacity="0";
})



$('.close-btn-search').click(function(e){
  e.preventDefault();
  $('.search-overlay').fadeOut();
})
$('.icon-1').click(function(e){
  e.preventDefault();
  $('.search-overlay').show();
})



$('.icon-cart').click(function(e){
  e.preventDefault();
  $('.canvas').addClass('active-canvas');
  $('.canvas-overlay').addClass('active-canvas-overlay');
})

$('.canvas-close-btn, .canvas-overlay').click(function(){
  $('.canvas').removeClass('active-canvas');
  $('.canvas-overlay').removeClass('active-canvas-overlay');
})






function createCookie(name, value, days) {
  var expires;

  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
  } else {
      expires = "";
  }
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = encodeURIComponent(name) + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ')
          c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
          return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function getOccurrence(array, value) {
  var count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
}

var products = {};

var cart = readCookie('cart');
if(cart == null) {
  cart = [];
} else {
  cart = JSON.parse(cart);
}

products[1] = {image: 'https://htmldemo.net/juan/juan/assets/img/product/product-1.jpg', name:'Leather Men Slipper', price:80};
products[2] = {image: 'https://htmldemo.net/juan/juan/assets/img/product/product-2.jpg', name:'Quickin Men Shoe', price:80};
products[3] = {image: 'https://htmldemo.net/juan/juan/assets/img/product/product-3.jpg', name:'Rexpo Women Shoes', price:80};
products[4] = {image: 'https://htmldemo.net/juan/juan/assets/img/product/product-4.jpg', name:'Primitiv Men Shoes', price:80};


$('.add-to-cart').click(function(){
  var id = $(this).closest('.product-block').attr('data-id');
  alert('Added to cart successfully');
  cart.push(id);
  var newcart = JSON.stringify(cart);
  createCookie('cart', newcart, 30);
  getCart();
})

function getCart() {
  $('.canvas-products').html('');
  var quantity = 0;
  var total = 0;
  if(cart != '') {
    var newcart = cart.filter(onlyUnique);
    $.each(newcart , function(index, val) {
      var counts = getOccurrence(cart, val);
      var price = parseInt(counts) * parseInt(products[val]['price']);
      total += price;
      quantity+=counts;
      $('.canvas-products').append('<div class="canvas-product"><div class="c-pro-img"><img src="'+products[val]['image']+'"></div><div class="c-pro-content"><div class="c-pro-title">'+products[val]['name']+'</div><div class="c-pro-price"><span class="c-pro-quantity">'+counts+'</span><span class="c-pro-separator">x</span><span class="c-pro-price">'+products[val]['price']+'$</span></div></div><div data-id="'+val+'" class="c-pro-btn">x</div></div>');
    });
    $('.canvas-subtotal .canvas-price-total').html(total+'$');
    var tax = parseInt($('.canvas-tax').attr('data-price'));
    var vat = parseInt($('.canvas-vat').attr('data-price'));
    var totalPrice = total + tax+ vat;
    $('.canvas-total .canvas-price-total').html(totalPrice+'$');
    $('.basket-count').html(quantity);
  }
}

getCart();

$(document).on('click', '.c-pro-btn', function(){
  var getid = $(this).attr('data-id');
  $(this).closest('.canvas-product').remove();
  $.each(cart, function(index, val){
    if(val == getid) {
      cart.splice(index);
    }
  })
  var newcart = JSON.stringify(cart);
  createCookie('cart', newcart, 30);
})


$('.sort-default-name').click(function(){
  $('.sort-menu').toggleClass('active-sort-menu');
})

$('.sort-menu-item').click(function(){
  var name = $(this).text();
  $('.sort-default-name').text(name);
  $('.sort-menu').removeClass('active-sort-menu');
})


$('.master-accordion-name').click(function(){
  if(!$(this).hasClass('active-acc')) {
  $(this).addClass('active-acc');
  $('.master-accordion-desc').slideUp();
  $(this).parent().find('.master-accordion-desc').slideToggle();
  } else {
    $(this).removeClass('active-acc');
  $('.master-accordion-desc').slideUp();
  }
})

$('.list').click(function(e){
  e.preventDefault();
  $('.shop-products-list').css('display','none');
  $('.shop-products-list-hidden').css('display','block')
  
})
$('.menu').click(function(e){
  e.preventDefault();
  $('.shop-products-list').css('display','flex');
  $('.shop-products-list-hidden').css('display','none')
  
})
const imageContainer = document.querySelector('.zoom');
imageContainer.onmousemove = (event) => {zoom(event)};

const zoom = (e) => {
  let imageZoom = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
  e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageY;
  x = offsetX/imageZoom.offsetWidth * 100;
  y = offsetY/imageZoom.offsetHeight * 100;
  imageZoom.style.backgroundPosition = x + '% ' + y + '%';
};

const thumbs = document.getElementsByClassName('thumb');
for(var i = 0; i < thumbs.length; i++) {
  thumbs[i].onclick = function() {
    document.querySelector('.zoom img').src = this.src;
    document.querySelector('.zoom').style.backgroundImage = 'url(' + this.src + ')';
  }
};


