jQuery(document).ready(function($) {
    var width = jQuery(window).width();
  
  
    if (jQuery('[data-toggle="tooltip"]').length > 0) {
      jQuery('[data-toggle="tooltip"]').tooltip({
        container: 'body'
      });
    }
  // end show tooltip 
    if(width<767){
      jQuery('.ldp_omnicare_05122023 .middle_ft_menu strong').click(function(event) {
        jQuery(this).toggleClass('omnicare_active');
        jQuery(this).siblings('ul').slideToggle(300);
      });
    }
    // marquee js partner
    jQuery('.qbx_slogan .marquee').marquee({
      speed: 100,
      gap: 50,
      delayBeforeStart: 0,
      direction: 'left',
      loop:false,
      duplicated: true,
      pauseOnHover: false
    });
            // end marquee js partner
    if(jQuery('.ldp_omnicare_05122023').length>0){
      if(width>1024){
        jQuery(".ldp_omnicare_05122023 .omnicare_banner .wrap_figure").attr({"data-wow-delay" : "0.3s", "data-wow-duration" : "1s"}).addClass("wow animated fadeInRight ");
        jQuery(".ldp_omnicare_05122023 .omnicare_banner .text_widget").attr({"data-wow-delay" : "0.3s", "data-wow-duration" : "1s"}).addClass("wow animated fadeInLeft ");
        jQuery(".omnicare_understand").attr({"data-wow-delay" : "0.3s", "data-wow-duration" : "1s"}).addClass("wow animated fadeInUp ");
        jQuery(".omnicare_cost").attr({"data-wow-delay" : "0.3s", "data-wow-duration" : "1s"}).addClass("wow animated fadeInDown ");
        jQuery(".omnicare_shorten").attr({"data-wow-delay" : "0.3s", "data-wow-duration" : "1s"}).addClass("wow animated zoomIn ");
        jQuery(".omnicare_takecare").attr({"data-wow-delay" : "0.3s", "data-wow-duration" : "1s"}).addClass("wow animated fadeInLeft ");
        jQuery(".omnicare_faq").attr({"data-wow-delay" : "0.3s", "data-wow-duration" : "1s"}).addClass("wow animated fadeInRight ");
        jQuery(".omnicare_manage").attr({"data-wow-delay" : "0.3s", "data-wow-duration" : "1s"}).addClass("wow animated fadeInLeft ");
        jQuery(".omnicare_news").attr({"data-wow-delay" : "0.3s", "data-wow-duration" : "1s"}).addClass("wow animated fadeInRight ");
        jQuery(".omnicare_form").attr({"data-wow-delay" : "0.3s", "data-wow-duration" : "1s"}).addClass("wow animated zoomIn ");
        new WOW().init();
      }
    }  
        // show tooltip 
    if(width<767){
      if (jQuery('.omnicare_shorten').length>0) {
        jQuery('.omnicare_shorten .row').slick({
          dots: true,
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          // speed: 300,
          // autoplay:true,
          // autoplaySpeed:3000,
          responsive: [{
            breakpoint: 1600,
            settings: {
            }
          }, 
          {
            breakpoint: 1025,
            settings: {
            }
          },{
            breakpoint: 768,
            settings: {
            }
          }, {
            breakpoint: 480,
            settings: {
            }
          }]
        });
  
      }
    }
      // fixed header on top header
    jQuery(window).scroll(function(){
      if(jQuery(this).scrollTop()>0){
        jQuery('.ldp_omnicare_05122023 .header').addClass('fixed_header');
      }else{
        jQuery('.ldp_omnicare_05122023 .header').removeClass('fixed_header');
      }
    });
    $(window).bind("load", function() {
      if(jQuery(window).scrollTop()>0){
        jQuery('.ldp_omnicare_05122023 .header').addClass('fixed_header');
      }
    });  
      // end header scroll
      // scroll to multi div
    jQuery('.menu_mobile_full_secure ul>li>a').click(function(e) {
      e.preventDefault();
    });
    jQuery('.ldp_omnicare_05122023 ul.menu>li>a').click(function(e) {
      e.preventDefault();
    });
    jQuery(window).scroll(function() {
      var window_top = jQuery(this).scrollTop();
      jQuery(".menu [class*='diem']").each(function() {
        var neoindext = jQuery(this).find('a').attr('rel');
        var neoclass = jQuery(".tg_target" + neoindext);
      });
    });
    function scroll_to(div) {
      jQuery('html, body').animate({
        scrollTop: jQuery(div).offset().top - 150
      }, 1000);
    }
    jQuery('.ldp_omnicare_05122023 ul.menu>li').click(function(event) {
      event.preventDefault();
      var neoindext = jQuery(this).find('a').attr('rel');
      scroll_to(".tg_target" + neoindext);
      jQuery(".menu  [class*='diem']").removeClass('active');
      jQuery(this).addClass('active').siblings().removeClass('active');
      return true;
    });
    if(width<1024){
      jQuery('.ldp_omnicare_05122023 ul.menu>li').click(function(event) {
        jQuery(".ldp_omnicare_05122023 .header .menu_hd .omnicare_icon_click").removeClass('omnicare_active');
        jQuery(".ldp_omnicare_05122023 .header .menu_hd .menu_hd_ct").removeClass('omnicare_active');
      });
    }
    jQuery('#menu_mobile_full_secure ul.menu li').click(function(event) {
      event.preventDefault();
      var neoindext = jQuery(this).find('a').attr('rel');
      scroll_to(".tg_target" + neoindext);
      jQuery("#menu_mobile_full_secure").animate({
        bottom: "100%"
      }, 0).removeClass('menu_show');
      return true;
    });
    // end scroll to multi div
      // scroll top
    jQuery(window).scroll(function(){
     if(jQuery(this).scrollTop() > 100){
      jQuery('.return_top').fadeIn();
    }else{
      jQuery('.return_top').fadeOut();
    }
  });
    jQuery('.return_top').click(function(event){
     event.preventDefault();
     jQuery('html,body').animate({scrollTop : 0},800);
   });
       // end scroll top
    // js popup_evaluate
    jQuery(document).on('click','.omnicare_business_reviews, .business_review_btn',function(event){
      event.preventDefault();
      jQuery('.popup_evaluate').modal('show');
    });
    jQuery(".popup_evaluate .evaluate_pro_general ul li").click(function() {
      jQuery(this).addClass('omnicare_current').siblings().removeClass('omnicare_current');
    });
    jQuery(".popup_evaluate .draob_one .evaluate_btn .qb_btn").click(function() {
      jQuery('.popup_evaluate .draob_one ').hide();
      jQuery('.popup_evaluate .draob_two ').show();
      jQuery('.popup_evaluate .evaluate_step>li:nth-child(2)').addClass('omnicare_current');
    });
    jQuery(".popup_evaluate .draob_two .evaluate_btn .qb_btn").click(function() {
      jQuery('.popup_evaluate .draob_two ').hide();
      jQuery('.popup_evaluate .draob_three ').show();
      jQuery('.popup_evaluate .evaluate_step>li:nth-child(3)').addClass('omnicare_current');
    });
    jQuery(".popup_evaluate .draob_three .evaluate_btn .qb_btn").click(function() {
      jQuery('.popup_evaluate .draob_three ').hide();
      jQuery('.popup_evaluate .draob_four ').show();
      jQuery('.popup_evaluate .evaluate_step>li:nth-child(4)').addClass('omnicare_current');
    });
    jQuery(".popup_evaluate .draob_four .evaluate_btn .evaluate_return_btn").click(function() {
      jQuery('.popup_evaluate .draob_three ').show();
      jQuery('.popup_evaluate .draob_four ').hide();
      jQuery('.popup_evaluate .evaluate_step>li:nth-child(4)').removeClass('omnicare_current');
    });
    jQuery(".popup_evaluate .draob_three .evaluate_btn .evaluate_return_btn").click(function() {
      jQuery('.popup_evaluate .draob_two ').show();
      jQuery('.popup_evaluate .draob_three ').hide();
      jQuery('.popup_evaluate .evaluate_step>li:nth-child(3)').removeClass('omnicare_current');
    });
    jQuery(".popup_evaluate .draob_two .evaluate_btn .evaluate_return_btn").click(function() {
      jQuery('.popup_evaluate .draob_one ').show();
      jQuery('.popup_evaluate .draob_two ').hide();
      jQuery('.popup_evaluate .evaluate_step>li:nth-child(2)').removeClass('omnicare_current');
    });
    // end js popup_evaluate
    jQuery(document).on("click",".ldp_omnicare_05122023 .omnicare_icon_click",function(){
      console.log(123);
      jQuery(this).toggleClass("omnicare_active");
      jQuery(".menu_hd_ct").toggleClass("omnicare_active");
    });
    $(document).on("click", ".show_hide_tab li", function() {
      var el_main = $(this).closest(".show_hide_tab_parent");
      var tab_id = $(this).attr("data-tab");
      jQuery(this).addClass("active").siblings().removeClass("active");
      var currentTab = $(el_main)
      .find("#" + tab_id)
      .addClass("active");
      jQuery(currentTab).siblings().removeClass("active");
    });
    // menu-mobile
    $(".icon_mobile_click").click(function() {
      $("#menu_mobile_full_secure").show();
    })
    jQuery(".icon_mobile_click").click(function() {
      jQuery(this).fadeOut(300);
      jQuery("#menu_mobile_full_secure").addClass('menu_show').stop().animate({
        bottom: "0px"
      }, 260);
      jQuery(".close_menu").show();
    });
    jQuery(".close_menu").click(function() {
      jQuery(" .icon_mobile_click").fadeIn(300);
      jQuery("#menu_mobile_full_secure").animate({
        bottom: "100%"
      }, 0).removeClass('menu_show');
      jQuery(this).hide();
    });
    jQuery("#menu_mobile_full_secure ul li a").click(function() {
      jQuery(".icon_mobile_click").fadeIn(300);
    });
    jQuery('.mobile-menu .menu>li:not(:has(ul.sub-menu)) , .mobile-menu .menu>li ul.sub-menu>li:not(:has(ul.sub-menu))').addClass('not-have-child');
    // menu cap 2
    jQuery('.mobile-menu ul.menu').children().has('ul.sub-menu').click(function() {
      jQuery(this).children('ul').slideToggle();
      jQuery(this).siblings().has('ul.sub-menu').find('ul.sub-menu').slideUp();
      jQuery(this).siblings().find('ul.sub-menu>li').has('ul.sub-menu').removeClass('editBefore_mobile');
    }).children('ul').children().click(function(event) {
      event.stopPropagation();
    });
    //menu cap 3
    jQuery('.mobile-menu ul.menu>li>ul.sub-menu').children().has('ul.sub-menu').click(function() {
      jQuery(this).children('ul.sub-menu').slideToggle();
    }).children('ul').children().click(function(event) {
      event.stopPropagation();
    });
    //menu cap 4
    jQuery('.mobile-menu ul.menu>li>ul.sub-menu>li>ul.sub-menu').children().has('ul.sub-menu').click(function() {
      jQuery(this).children('ul.sub-menu').slideToggle();
    }).children('ul').children().click(function(event) {
      event.stopPropagation();
    });
    jQuery('.mobile-menu ul.menu li').has('ul.sub-menu').click(function(event) {
      jQuery(this).toggleClass('editBefore_mobile');
    });
    jQuery('.mobile-menu ul').children().has('ul.sub-menu').addClass('menu-item-has-children');
    jQuery('.mobile-menu ul.menu>li').click(function() {
      jQuery(this).addClass('active').siblings().removeClass('active, editBefore_mobile');
    });
    // end  menu mobile
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > 150) {
        jQuery('.navigation-nt-100923').addClass('fixed');
      } else {
        jQuery('.navigation-nt-100923').removeClass('fixed');
      }
    });
  
    
  });
  // slider
  
  if (jQuery('.omnicare_understand').length>0) {
    jQuery('.omnicare_understand .sli_understand_figure').slick({
      dots: true,
      infinite: true,
      arrows: false,
      fade:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      autoplay:true,
      autoplaySpeed:3000,
      asNavFor: '.omnicare_understand .sli_understand_widget',
      responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, 
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  
  }
  if (jQuery('.omnicare_understand').length > 0) {
    jQuery('.omnicare_understand .sli_understand_widget').slick({
      dots: false,
      infinite: true,
      arrows: false, 
      asNavFor: '.omnicare_understand .sli_understand_figure',
      slidesToShow: 3,
      vertical: true,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },{
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
    });
  }
  
  if (jQuery('.omnicare_cost').length>0) {
    jQuery('.omnicare_cost .sli_understand_figure').slick({
      dots: true,
      infinite: true,
      arrows: false,
      fade:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      autoplay:true,
      autoplaySpeed:3000,
      asNavFor: '.omnicare_cost .sli_understand_widget',
      responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, 
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  
  }
  if (jQuery('.omnicare_cost').length > 0) {
    jQuery('.omnicare_cost .sli_understand_widget').slick({
      dots: false,
      infinite: true,
      arrows: false, 
      asNavFor: '.omnicare_cost .sli_understand_figure',
      slidesToShow: 3,
      vertical: true,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },{
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
    });
  }
  
  // end slider
  // jQuery('.ldp_omnicare_05122023 .omnicare_understand .botton_line_ver2').click(function(e){
  //   var tab_id = $(this).attr('data-tab');
  //   $('.ldp_omnicare_05122023 .omnicare_understand .botton_line_ver2').removeClass('omnicare_current');
  //   $('.ldp_omnicare_05122023 .omnicare_understand .tab-content').removeClass('omnicare_current');
  //   $(this).addClass('omnicare_current');
  //   $("#"+tab_id).addClass('omnicare_current');
  //   jQuery(this).find('.expand_ver2').slideToggle();
  //   jQuery('.ldp_omnicare_05122023 .omnicare_understand .botton_line_ver2').not(this).find('.expand_ver2').slideUp();
  //   jQuery(this).find('.expand_ver2').click(function(e){
  //     e.stopPropagation();
  //   });
  // }) ;
  
  // jQuery('.ldp_omnicare_05122023 .omnicare_cost .botton_line_ver2').click(function(e){
  //   var tab_id = $(this).attr('data-tab');
  //   $('.ldp_omnicare_05122023 .omnicare_cost .botton_line_ver2').removeClass('omnicare_current');
  //   $('.ldp_omnicare_05122023 .omnicare_cost .tab-content').removeClass('omnicare_current');
  //   $(this).addClass('omnicare_current');
  //   $("#"+tab_id).addClass('omnicare_current');
  //   jQuery(this).find('.expand_ver2').slideToggle();
  //   jQuery('.ldp_omnicare_05122023 .omnicare_cost .botton_line_ver2').not(this).find('.expand_ver2').slideUp();
  //   jQuery(this).find('.expand_ver2').click(function(e){
  //     e.stopPropagation();
  //   });
  // }) ;
  
      // js faq
  jQuery(".ldp_omnicare_05122023 .qb_faq_detailds:nth-child(1)").addClass("omnicare_current");
  jQuery(".ldp_omnicare_05122023 .qb_faq_detailds:nth-child(1).omnicare_current").siblings().find(".tg_textwidget").hide();
  jQuery(".ldp_omnicare_05122023 .qb_faq_detailds .qb_faq_info").click(function(){
    jQuery(this).siblings(".tg_textwidget").slideToggle();
    jQuery(this).closest(".qb_faq_detailds").toggleClass("omnicare_current");
    jQuery(this).closest(".qb_faq_detailds").siblings().removeClass("omnicare_current");
    jQuery(this).closest(".qb_faq_detailds").siblings().find(".tg_textwidget").slideUp();
  });
  
  // end js faq
  
  