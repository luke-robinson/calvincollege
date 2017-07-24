
// Foundation 6.4

import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


// Calvin College JavaScript

// Sidebar navigation on small screens
// Rotate the menu icon 90 degrees
$('.sidebar-menu').on('click', function(){
    $(this).toggleClass("active"); return false;  
});
// Local navigation for small screens
// Accessible toggle menu - http://blog.g-design.net/post/42617934013/create-an-accessible-toggle-menu-for-mobile-websites
var originalNavClasses;
  function toggleNav() {
    var elem = document.getElementById('sideNav');
    var classes = elem.className;
    if (originalNavClasses === undefined) {
      originalNavClasses = classes;
    }
  elem.className = /expanded/.test(classes) ? originalNavClasses : originalNavClasses + ' expanded';
}


/* BLOCK TARGET WIDTH FUNCTION - simply include the below into your javascript */
/* EXAMPLE: <ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-3" data-options="block_width:300">  */
/* http://foundation.zurb.com/forum/posts/15137-plugin-block-grid-target-width */

;(function ($, window, document, undefined) {
  'use strict';
  
  var blocks;
  var w;
  
  // Update the block-grid
  $.fn.updateBlockGrid = function(width) {
    w = (width === undefined) ? w : width;
    var l = $(this).find("li").length; 
    if(blocks != null) $(this).removeClass('small-block-grid-' + blocks); 
    blocks = Math.min(l, 12, Math.max(1, Math.round($(this).innerWidth()/(w))));
      $(this).addClass('small-block-grid-' + blocks);
  }
  
  // Read data-options, and set block grid based on target width
  var el = Foundation.utils.S("ul[data-options*='block_width']");
  if(el.length) {
    var s = Foundation.utils.data_options(el).block_width;
    if(s !== undefined){
      var w = (s.length === 0) ? 300 : parseInt(s);
      $(window).on('resize.block-grid', Foundation.utils.debounce(function(e){
        el.updateBlockGrid(w);
     }, 200, false));
      el.updateBlockGrid(w);
    }
  }
  
 }(jQuery, this, this.document));




// Sarah's excellent show/hide global navigation menu when scrolling up/down.
$(function(){
  //Keep track of last scroll
  var lastScroll = 0;
  $(window).scroll(function(event){
    //Sets the current scroll position
    var newScroll = $(this).scrollTop();
    //Determines up-or-down scrolling
    if (newScroll < lastScroll||window.pageYOffset<129){
     $('#XXX global-navigation').slideDown(200);
    } 
    else {
     $('#XXX global-navigation').slideUp(200);
    }
    //Updates scroll position
    lastScroll = newScroll;
  });
});

// Sarah's .scroll class for jump anchors down a Web page. Avoids the fixed header with a 50px offset.
$(document).ready(function() {
  $(".no-touch .scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top-50;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });
});

// Show or hide the Back To Top button - Credit umhb.edu
$(window).scroll(function() {
  if ($(this).scrollTop() > 600) {
    $('.go-top').fadeIn(200);
  } else {
    $('.go-top').fadeOut(200);
  }
  });
  // Animate the scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop : 0
    }, 600);
});


// TOGGLE with jQuery
// https://web.archive.org/web/20100201050515/http://www.sohtanaka.com/web-design/easy-toggle-jquery-tutorial/
$(document).ready(function() {
    "use strict";
    $("a.toggle-switch").html("+ Expand all");
    $(".toggle-content").click(function() {
        $(this).toggleClass("open").nextAll(".toggle-content").slideToggle("fast"); // Apply "open" class.
    });
    $(".toggle-content").hide();
    $(".toggle-trigger").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("open").nextAll(".toggle-content").slideToggle("fast"); // Apply "open" class
    });
    // To expand and collapse all toggles simultaneously, just toggle-trigger the click event. The multiply sign is JS hex value \u00d7.
    $("a.toggle-switch").click(function() {
        var label = $(".toggle-switch").html();
        var other = "\u00d7 Collapse all";
        if (label === "\u00d7 Collapse all") {
            other = "+ Expand all";
        }
        $(".toggle-trigger").each(function() {
            $(this).toggleClass("open").nextAll(".toggle-content").slideToggle("fast");
        });
        $(".toggle-switch").html(other);
    });
});


/*!
 * @preserve
 *
 * Readmore.js jQuery plugin
 * Author: @jed_foster
 * Project home: http://jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 *
 * Debounce function from http://davidwalsh.name/javascript-debounce-function
 */
!function(e){"use strict";function t(e,t,a){var i;return function(){var n=this,o=arguments,r=function(){i=null,a||e.apply(n,o)},s=a&&!i;clearTimeout(i),i=setTimeout(r,t),s&&e.apply(n,o)}}function a(e){var t=++h;return String(null==e?"rmjs-":e)+t}function i(e){var t=e.clone().css({height:"auto",width:e.width(),maxHeight:"none",overflow:"hidden"}).insertAfter(e),a=t.outerHeight(),i=parseInt(t.css({maxHeight:""}).css("max-height").replace(/[^-\d\.]/g,""),10),n=e.data("defaultHeight");t.remove();var o=i||e.data("collapsedHeight")||n;e.data({expandedHeight:a,maxHeight:i,collapsedHeight:o}).css({maxHeight:"none"})}function n(e){if(!d[e.selector]){var t=" ";e.embedCSS&&""!==e.blockCSS&&(t+=e.selector+" + [data-readmore-toggle], "+e.selector+"[data-readmore]{"+e.blockCSS+"}"),t+=e.selector+"[data-readmore]{transition: height "+e.speed+"ms;overflow: hidden;}",function(e,t){var a=e.createElement("style");a.type="text/css",a.styleSheet?a.styleSheet.cssText=t:a.appendChild(e.createTextNode(t)),e.getElementsByTagName("head")[0].appendChild(a)}(document,t),d[e.selector]=!0}}function o(t,a){this.element=t,this.options=e.extend({},s,a),n(this.options),this._defaults=s,this._name=r,this.init(),window.addEventListener?(window.addEventListener("load",l),window.addEventListener("resize",l)):(window.attachEvent("load",l),window.attachEvent("resize",l))}var r="readmore",s={speed:100,collapsedHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,blockCSS:"display: block; width: 100%;",startOpen:!1,beforeToggle:function(){},afterToggle:function(){}},d={},h=0,l=t(function(){e("[data-readmore]").each(function(){var t=e(this),a="true"===t.attr("aria-expanded");i(t),t.css({height:t.data(a?"expandedHeight":"collapsedHeight")})})},100);o.prototype={init:function(){var t=this,n=e(this.element);n.data({defaultHeight:this.options.collapsedHeight,heightMargin:this.options.heightMargin}),i(n);var o=n.data("collapsedHeight"),r=n.data("heightMargin");if(n.outerHeight(!0)<=o+r)return!0;var s=n.attr("id")||a(),d=t.options.startOpen?t.options.lessLink:t.options.moreLink;n.attr({"data-readmore":"","aria-expanded":!1,id:s}),n.after(e(d).on("click",function(e){t.toggle(this,n[0],e)}).attr({"data-readmore-toggle":"","aria-controls":s})),t.options.startOpen||n.css({height:o})},toggle:function(t,a,i){i&&i.preventDefault(),t||(t=e('[aria-controls="'+this.element.id+'"]')[0]),a||(a=this.element);var n=this,o=e(a),r="",s="",d=!1,h=o.data("collapsedHeight");o.height()<=h?(r=o.data("expandedHeight")+"px",s="lessLink",d=!0):(r=h,s="moreLink"),n.options.beforeToggle(t,a,!d),o.css({height:r}),o.on("transitionend",function(){n.options.afterToggle(t,a,d),e(this).attr({"aria-expanded":d}).off("transitionend")}),e(t).replaceWith(e(n.options[s]).on("click",function(e){n.toggle(this,a,e)}).attr({"data-readmore-toggle":"","aria-controls":o.attr("id")}))},destroy:function(){e(this.element).each(function(){var t=e(this);t.attr({"data-readmore":null,"aria-expanded":null}).css({maxHeight:"",height:""}).next("[data-readmore-toggle]").remove(),t.removeData()})}},e.fn.readmore=function(t){var a=arguments,i=this.selector;return t=t||{},"object"==typeof t?this.each(function(){if(e.data(this,"plugin_"+r)){var a=e.data(this,"plugin_"+r);a.destroy.apply(a)}t.selector=i,e.data(this,"plugin_"+r,new o(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?this.each(function(){var i=e.data(this,"plugin_"+r);i instanceof o&&"function"==typeof i[t]&&i[t].apply(i,Array.prototype.slice.call(a,1))}):void 0}}(jQuery);
	$('.showmore').readmore({
        speed: 500,
        collapsedHeight: 180,
        moreLink: '<a href="#" style="background: linear-gradient(to bottom, rgba(255,255,255,.1) 0%, rgba(255,255,255,1) 100%); height: 3em; margin-top:-3em; position:absolute; padding-top: 2.5em;">+ Show more</a>',
        lessLink: '<a href="#">× Show less</a>',
        afterToggle: function(trigger, element, expanded) {
          // $('.shadow').toggle(100);
      if(! expanded) { // The "Close" link was clicked
        $('html, body').animate({scrollTop: $(element).offset().top-145}, {duration: 400});
      }
    }

    });

