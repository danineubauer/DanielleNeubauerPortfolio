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

