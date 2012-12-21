<!-- 	

this works with Foundation framework
the .js goes last
just before the closing tags
</body> 
</html>

make your <imgs> the same dims for easy use 
		
-->


<!-- 	USE THIS TOO 
=================================================== -->
<div id="featured" class="show-for-small">

<img src="../images/">
<img src="../images/">
<img src="../images/">

</div>


<!-- 	TOUCH SWIPE IMAGES FOR PHONES 
=================================================== -->

<script type="text/javascript">
$(window).load(function() {

$('#featured').orbit({
animation: 'horizontal-push', // fade, horizontal-slide, vertical-slide, horizontal-push
animationSpeed: 400, // how fast animtions are
timer: false, // true or false to have the timer
advanceSpeed: 4000, // if timer is enabled, time between transitions
pauseOnHover: false, // if you hover pauses the slider
startClockOnMouseOut: false, // if clock should start on MouseOut
startClockOnMouseOutAfter: 1000, // how long after MouseOut should the timer start again
directionalNav: false, // manual advancing directional navs
captions: false, // do you want captions?
// captionAnimation: 'fade', // fade, slideOpen, none
// captionAnimationSpeed: 800, // if so how quickly should they animate in
// bullets: false, // true or false to activate the bullet navigation
// bulletThumbs: false, // thumbnails for the bullets
// bulletThumbLocation: '../images/file.png', // location from this file where thumbs will be
afterSlideChange: $.noop // empty function

});
});

</script>
