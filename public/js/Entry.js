requirejs( ['js/soli/SoliWrapper.js'], function() {
	new Entry();
} );

"use strict";
function Entry() {

	const _instance = {};

	function setupSoli() {
		const soli = new SoliWrapper();
		soli.onPresence = onSoliPresence;
		soli.onReach = onSoliReached;
		soli.onSwipe = onSoliSwipe;
		soli.onTap = onSoliTap;
		soli.start();
	}

	function onSoliPresence() {
		console.log('PRESENCE');
	}

	function onSoliReached( position ) {
		console.log('REACH { x:' + position.x + ', y:' + position.y + ', z:' + position.z + ' }');
	}

	function onSoliSwipe( direction ) {
		if(direction === SOLI.DIRECTION.DOWN){
			console.log('SWIPE DOWN');
		} else if(direction === SOLI.DIRECTION.UP){
			console.log('SWIPE UP');
		} else if(direction === SOLI.DIRECTION.LEFT){
			console.log('SWIPE LEFT');
		} else if(direction === SOLI.DIRECTION.RIGHT){
			console.log('SWIPE RIGHT');
		}
	}

	function onSoliTap() {
		console.log('TAP');
	}

	setupSoli();
	return _instance;
}