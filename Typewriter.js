// Page flip 
// var siteW = $(window).width();
// var siteH = $(window).height();

// $("p").css({ lineHeight: siteH + 'px' }); // dirty dirty

// TweenMax.set(".site", { perspective: 5000 });
// TweenMax.set(".container", { transformStyle: "preserve-3d",  transformOrigin: '-0% 50%' });
// TweenMax.set("#new-content", { rotationY: 90, z: -siteW/2, x: siteW/2 });

// var tlFlip = new TimelineMax({ yoyo: true, repeat: -1, delay: 1.5, repeatDelay: 2 });

// tlFlip
// .to('.site', .5, { scale: 0.8, ease: Power2.easeInOut }, "start")
// .to('.container', .4, { rotationY: -90, z: -siteW, ease: Power2.easeInOut }, "start+=0.7")
// .to('.site', .5, { scale: 1, ease: Power2.easeInOut }, "start+=1.2");



// OTHER


var aText = new Array(
    "I'm a full-stack developer based in Berkeley, California.",
    "Together we can plan, engineer and design,", 
    "your greatest dreams & visions.",
    );
    var iSpeed = 30; 
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    const typewriter = function() {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
}
typewriter();



const button = function() { 
    document.getElementById('button').style.visibility = 'visible';
    document.getElementById('arrow').style.visibility = 'visible';
}


setTimeout(button, 6300);





//MENU ON THE RIGHT SIDE 
const menu = document.querySelector('#toggle');  
const menuItems = document.querySelector('#overlay');  
const menuContainer = document.querySelector('.menu-container');  
const menuIcon = document.querySelector('i'); 
const homePage = document.getElementById('homePageElement'); 

function toggleMenu(e) {
    menuItems.classList.toggle('open');
    menuContainer.classList.toggle('full-menu');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.add('fa-times');
    e.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);

//----------Toggles between homepage and menu-------------
$(menu).click(function(){ 
    $('#homePageElement').toggle();
    $('.icon-bar').toggle(); 
    $('.arrow').toggle();
})


$('#button').click(function() { 
    $
})































// // State
// const state = {
// 	animations: ['fade', 'slide', 'slideUp', 'zoom', 'flipX', 'flipY'],
// 	view: 'slide'
// }

// // Controls
// const controls = Vue.component('controls', {
//   template: '#controls',
// 	data: state,
// 	methods: {
// 		setView(animation) {
// 			state.view = animation
// 		}
// 	}
// })

// // Transitions
// const fade = Vue.component('fade', {
//   template: '#page',
// 	methods: {
// 		enter(el, done) {
// 			TweenMax.fromTo(el, 1, {
// 				autoAlpha: 0,
// 				scale: 1.5,
// 			}, {
// 				autoAlpha: 1,
// 				scale: 1,
// 				transformOrigin: '50% 50%',
// 				ease: Power4.easeOut,
// 				onComplete: done
// 			});
// 		},
// 		leave(el, done) {
// 			TweenMax.fromTo(el, 1, {
// 				autoAlpha: 1,
// 				scale: 1,
// 			}, {
// 				autoAlpha: 0,
// 				scale: 0.8,
// 				ease: Power4.easeOut,
// 				onComplete: done
// 			});
// 		}
// 	}
// })

// const slide = Vue.component('slide', {
//   template: '#page',
// 	methods: {
// 		enter(el, done) {
// 			const tl = new TimelineMax({
// 				onComplete: done
// 			})
			
// 			tl.set(el, {
// 				x: window.innerWidth * 1.5,
// 				scale: 0.8,
// 				transformOrigin: '50% 50%'
// 			})
			
// 			tl.to(el, 0.5, {
// 				x: 0,
// 				ease: Power4.easeOut
// 			});
			
// 			tl.to(el, 1, {
// 				scale: 1,
// 				ease: Power4.easeOut
// 			});
// 		},
// 		leave(el, done) {
// 			TweenMax.fromTo(el, 1, {
// 				autoAlpha: 1
// 			}, {
// 				autoAlpha: 0,
// 				ease: Power4.easeOut,
// 				onComplete: done
// 			});
// 		}	
// 	}
// })

// const slideUp = Vue.component('slideUp', {
//   template: '#page',
// 	methods: {
// 		enter(el, done) {
// 			const tl = new TimelineMax({
// 				onComplete: done
// 			})
			
// 			tl.set(el, {
// 				y: window.innerWidth * 1.5,
// 				scale: 0.8,
// 				transformOrigin: '50% 50%'
// 			})
			
// 			tl.to(el, 0.5, {
// 				y: 0,
// 				ease: Power4.easeOut
// 			});
			
// 			tl.to(el, 1, {
// 				scale: 1,
// 				ease: Power4.easeOut
// 			});
// 		},
// 		leave(el, done) {
// 			TweenMax.to(el, 1, {
// 				y: window.innerHeight * -1.5,
// 				ease: Power4.easeOut,
// 				onComplete: done
// 			});
// 		}	
// 	}
// })

// const zoom = Vue.component('zoom', {
//   template: '#page',
// 	methods: {
// 		enter(el, done) {
// 			const tl = new TimelineMax({
// 				onComplete: done
// 			})
			
// 			tl.set(el, {
// 				autoAlpha: 0,
// 				scale: 2,
// 				transformOrigin: '50% 50%'
// 			})
			
// 			tl.to(el, 1, {
// 				autoAlpha: 1,
// 				scale: 1,
// 				ease: Power4.easeOut
// 			})
// 		},
// 		leave(el, done) {
// 			TweenMax.to(el, 1, {
// 				scale: 0,
// 				ease: Power4.easeOut,
// 				onComplete: done
// 			});
// 		}	
// 	}
// })

// const flipX = Vue.component('flipX', {
//   template: '#page',
// 	methods: {
// 		enter(el, done) {
// 			const tl = new TimelineMax({
// 				onComplete: done
// 			})
			
// 			tl.set(el, {
// 				autoAlpha: 0,
// 				rotationX: 90,
// 				transformOrigin: '50% 50%'
// 			})
			
// 			tl.to(el, 1, {
// 				autoAlpha: 1,
// 				rotationX: 0,
// 				ease: Power4.easeOut
// 			})
// 		},
// 		leave(el, done) {
// 			TweenMax.to(el, 1, {
// 				scale: 0,
// 				ease: Power4.easeOut,
// 				onComplete: done
// 			});
// 		}	
// 	}
// })

// const flipY = Vue.component('flipY', {
//   template: '#page',
// 	methods: {
// 		enter(el, done) {
// 			const tl = new TimelineMax({
// 				onComplete: done
// 			})
			
// 			tl.set(el, {
// 				autoAlpha: 0,
// 				rotationY: 90,
// 				transformOrigin: '50% 50%'
// 			})
			
// 			tl.to(el, 1, {
// 				autoAlpha: 1,
// 				rotationY: 0,
// 				ease: Power4.easeOut
// 			})
// 		},
// 		leave(el, done) {
// 			TweenMax.to(el, 1, {
// 				scale: 0,
// 				ease: Power4.easeOut,
// 				onComplete: done
// 			});
// 		}	
// 	}
// })

// // App
// const app = new Vue({
//   el: '#app',
//   data() {
// 		return state
// 	}
// })




//----------------------------------------------------Navigation bar and layout-------------------------------------------//

class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
  
  // changed: 
	// onTabClick(event, element) {
	// 	event.preventDefault();
	// 	let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
	// 	$('html, body').animate({ scrollTop: scrollTop }, 600);
	// }
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}

new StickyNavigation();





//*********************************FORM!!*********************************** 
var formContainer = $('#form-container');

bindFormClick();
//Opening the form
function bindFormClick(){
  $(formContainer).on('click', function(e) {
    e.preventDefault();
    toggleForm();
    //Ensure container doesn't togleForm when open
    $(this).off();
  });
}

//Closing the form
$('#form-close, .form-overlay').click(function(e) {
  e.stopPropagation();
  e.preventDefault();
  toggleForm();
  bindFormClick();
});

function toggleForm(){
  $(formContainer).toggleClass('expand');
  $(formContainer).children().toggleClass('expand');
  $('body').toggleClass('show-form-overlay');
  $('.form-submitted').removeClass('form-submitted');
}

//Form validation
$('form').submit(function() {
  var form = $(this);
  form.find('.form-error').removeClass('form-error');
  var formError = false;
  
  form.find('.input').each(function() {
    if ($(this).val() == '') {
      $(this).addClass('form-error');
      $(this).select();
      formError = true;
      return false;
    }
    else if ($(this).hasClass('email') && !isValidEmail($(this).val())) {
      $(this).addClass('form-error');
      $(this).select();
      formError = true;
      return false;
    }
  });
  
  if (!formError) {
    $('body').addClass('form-submitted');
    $('#form-head').addClass('form-submitted'); 
    setTimeout(function(){
      $(form).trigger("reset");
    }, 1000);
  }
  return false;
});

function isValidEmail(email) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
};

social("twitter/joeharry__", "codepen/woodwork",
"disco");











