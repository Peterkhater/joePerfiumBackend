(function ($) {
  ("use strict");

  // canvas menu activation
  $(".canvas_open").on("click", function () {
    $(".offcanvas_menu_wrapper,.off_canvars_overlay").addClass("active");
  });

  $(".canvas_close,.off_canvars_overlay").on("click", function () {
    $(".offcanvas_menu_wrapper,.off_canvars_overlay").removeClass("active");
  });

  //   off canvas menu
  var $offcanvasNav = $(".offcanvas_main_menu"),
    $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
  $offcanvasNavSubMenu
    .parent()
    .prepend(
      '<span class="menu-expand"><i class="fa fa-angle-down"></i></span>'
    );

  $offcanvasNavSubMenu.slideUp();

  $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children| has-children | has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.siblings("ul").slideUp("slow");
      } else {
        $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
        $this.siblings("ul").slideDown("slow");
      }
    }

    if (
      $this.is("a") ||
      $this.is("span") ||
      $this.attr("class").match(/\b(menu-expand)\b/)
    ) {
      $this.parent().toggleClass("menu-open");
    } else if (
      $this.is("li") &&
      $this.attr("class").match(/\b('menu-item-has-children')\b/)
    ) {
      $this.toggleClass("menu-open");
    }
  });

  //   search box slidetoggle activation
  $(".search_box > a").on("click", function () {
    $(this).toggleClass("active");
    $(".search_widget").slideToggle("medium");
  });

  // slide toggle activation of mini cart
  $(".mini_cart_wrapper > a").on("click", function () {
    if ($(window).width() < 991) {
      $(".mini_cart").slideToggle("medium");
    }
  });

  // sticky header

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".sticky-header").removeClass("sticky");
    } else {
      $(".sticky-header").addClass("sticky");
    }
  });

  function dataBackgroundImage() {
    $("[data-bgimg]").each(function () {
      var bgImgUrl = $(this).data("bgimg");
      $(this).css({
        "background-image": "url(" + bgImgUrl + ")",
      });
    });
  }

  $(window).on("load", function () {
    dataBackgroundImage();
  });

  // slider activation
  $(".slider_area").owlCarousel({
    animateOut: "fadeOut",
    autoplay: true,
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    items: 1,
    dots: false,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
  });

  // product column of 4 activation
  $(".product_column4")
    .on("changed.owl.carousel initialized.owl.carousel", function (event) {
      $(event.target)
        .find(".owl-item")
        .removeClass("last")
        .eq(event.item.index + event.page.size - 1)
        .addClass("last");
    })
    .owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      items: 4,
      dots: false,
      navText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });

  // tooltip activation

  $(".action_links ul li a,.add_to_cart a,.footer_social_link ul li a").tooltip(
    {
      animated: "fade",
      placement: "top",
      container: "body",
    }
  );

  // activation of one column of deal product
  $(".product_column1")
    .on("changed.owl.carousel initialized.owl.carousel", function (event) {
      $(event.target)
        .find(".owl-item")
        .removeClass("last")
        .eq(event.item.index + event.page.size - 1)
        .addClass("last");
    })
    .owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      items: 4,
      dots: false,
      navText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 1,
        },
      },
    });


  // Testimonial activation
  $(".testimonial_sidebar_carousel").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    items: 1,
    dots: false,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
  });

  // activation of one column of Best seller product
  $(".product_column3")
    .on("changed.owl.carousel initialized.owl.carousel", function (event) {
      $(event.target)
        .find(".owl-item")
        .removeClass("last")
        .eq(event.item.index + event.page.size - 1)
        .addClass("last");
    })
    .owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      items: 4,
      dots: false,
      navText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        567: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 3,
        },
      },
    });

  // activation of blog section
  $(".blog_column3").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    items: 4,
    dots: false,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Small product column 1 activation
  $(".small_product_column1")
    .on("changed.owl.carousel initialized.owl.carousel", function (event) {
      $(event.target)
        .find(".owl-item")
        .removeClass("last")
        .eq(event.item.index + event.page.size - 1)
        .addClass("last");
    })
    .owlCarousel({
      autoplay: true,
      loop: true,
      nav: false,
      autoplay: false,
      autoplayTimeout: 5000,
      items: 4,
      dots: false,
      navText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        568: {
          items: 2,
          margin: 15,
        },
        768: {
          items: 1,
        },
      },
    });

  // activation of small nav active
  $(".product_navactive").owlCarousel({
    autoplay: false,
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      250: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
    },
  });

  $(".modal").on("shown.bs.modal", function (e) {
    $(".product_navactive").resize();
  });
  $(".product_navactive a").on("click", function (e) {
    e.preventDefault();

    var $href = $(this).attr("href");

    $(".product_navactive a").removeClass("active");
    $(this).addClass("active");

    $(".product-details-large .tab-pane").removeClass("active show");
    $(".product-details-large " + $href).addClass("active show");
  });

  $(".select_option").niceSelect();
})(jQuery);


let selectedBottle = null;
let selectedEssences = [];
let totalPrice = 0;

function startCustomization() {
    document.querySelector('.start-btn').style.display = 'none';
    document.getElementById('customization-section').style.display = 'block';
}

function selectBottle(element) {
    // Reset previous selection
    const bottles = document.querySelectorAll('.bottle-option');
    bottles.forEach(bottle => bottle.style.border = 'none');
    
    // Select the clicked bottle
    selectedBottle = element;
    selectedBottle.style.border = '2px solid #007bff';
    const bottlePrice = parseFloat(selectedBottle.getAttribute('data-price'));
    
    // Update total price
    totalPrice = bottlePrice + selectedEssences.reduce((sum, essence) => sum + essence.price, 0);
    updatePrice();
}

function selectEssence(element) {
    const essenceName = element.getAttribute('data-essence');
    const essencePrice = parseFloat(element.getAttribute('data-price'));

    // Check if the essence is already selected
    if (!selectedEssences.some(essence => essence.name === essenceName)) {
        selectedEssences.push({ name: essenceName, price: essencePrice });
        element.style.opacity = 0.5;  // Show it's selected

        // Update total price
        totalPrice += essencePrice;
        updatePrice();
    } else {
        alert("Essence already selected!");
    }
}

function updatePrice() {
    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}



function clear() {
    // Reset the selected bottle and its visual indicator
    if (selectedBottle) {
        selectedBottle.style.border = 'none';
        selectedBottle = null;
    }

    // Reset essences and their visual indicators
    selectedEssences.forEach(essence => {
        const essenceElement = document.querySelector(`[data-essence="${essence.name}"]`);
        if (essenceElement) {
            essenceElement.style.opacity = 1; // Restore full opacity
        }
    });
    selectedEssences = [];

    // Reset total price and update display
    totalPrice = 0;
    updatePrice();
}

document.addEventListener('DOMContentLoaded', () => {
  const clearButton = document.getElementById('btn_clear');
  if (clearButton) {
      clearButton.addEventListener('click', clear);
  } else {
      console.error("Clear button not found!");
  }
});



function whatsapp_text() {
  if (!selectedBottle) {
      alert("Please select a bottle.");
      return;
  }

  
  const bottleSize = selectedBottle.getAttribute('data-size') || 'unknown size';

 
  const essencesList = selectedEssences
      .map((essence, index) => `${index + 1}: ${essence.name}`)
      .join('\n');

  
      const text = `Hello Joe,\nI would like to order a ${bottleSize} bottle. \nThe essences I would like to include are:\n${essencesList}`;


  console.log(text); 

  // Example: Send this text via WhatsApp
  const whatsappUrl = `https://wa.me/+96181121347?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
}
