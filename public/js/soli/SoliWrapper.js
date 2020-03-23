SOLI = {};
SOLI.DIRECTION = {UP: 7, RIGHT: 1, DOWN: 3, LEFT: 5};

function SoliWrapper() {
	return window.onSoliEvent !== undefined ? new PixelSoli() : new DesktopSoli();
}

function DesktopSoli() {
	const _instance = new PixelSoli();
	console.log('SOLI DESKTOP');

	let _mouseX = window.innerWidth * 0.5;
	let _mouseY = window.innerHeight * 0.5;

	let _reachInterval = -1;

	_instance.start = function () {
		window.addEventListener('keyup', onKeyUp);
		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('mousemove', onMouseMove);
	};

	_instance.stop = function () {
		window.removeEventListener('keyup', onKeyUp);
		window.removeEventListener('keydown', onKeyDown);
		window.removeEventListener('mousemove', onMouseMove);
	};

	function onMouseMove(event) {
		_mouseX = event.clientX;
		_mouseY = event.clientY;
	}

	function onKeyDown( event ){
		if(event.key === 'r' && _reachInterval === -1 ) {
			dispatchReach();
			_reachInterval = setInterval(dispatchReach, 200);
		}
	}

	function onKeyUp(event) {
		if(event.key === 'ArrowDown'){
			_instance.onSwipe(SOLI.DIRECTION.DOWN);
		} else if(event.key === 'ArrowUp'){
			_instance.onSwipe(SOLI.DIRECTION.UP);
		} else if(event.key === 'ArrowLeft'){
			_instance.onSwipe(SOLI.DIRECTION.LEFT);
		} else if(event.key === 'ArrowRight'){
			_instance.onSwipe(SOLI.DIRECTION.RIGHT);
		} else if(event.key === ' ') {
			_instance.onTap();
		} else if(event.key === 'r') {
			clearInterval(_reachInterval);
			_reachInterval = -1;
		} else if( event.key === 'p') {
			_instance.onPresence();
		}
	}

	function dispatchReach() {
		_instance.onReach({x: _mouseX - window.innerWidth * 0.5, y: _mouseY - window.innerHeight * 0.5, z: 100});
	}

	return _instance;
}

function PixelSoli() {
	const _instance = {};

	_instance.start = function () {
		window.onSoliEvent = function (event) {
			if (event.type === 'tap') {
				_instance.onTap();
			} else if (event.type === 'swipe') {
				_instance.onSwipe(event.data.direction);
			} else if (event.type === "reach" && event.data.detected) {
				const reachAzimuth = event.data.angle[0]; //updates the reach azimuth angle
				const reachElevation = event.data.angle[1]; //updates the reach elevation angle
				const reachDistance = event.data.distance; //updates the reach distance
				const position = _instance.sphericalToCartesian(reachAzimuth, reachElevation, reachDistance);

				_instance.onReach( position );
			} else if (event.type === "presence") {
				_instance.onPresence();
			} else {
				console.log('MISSING IMPLEMENTATION OF EVENT TYPE: ' + event.type);
			}
		}
	};

	_instance.stop = function () {
		window.onSoliEvent = function () {
		};
	};

	_instance.onSwipe = function ( direction ) {
	};
	_instance.onReach = function () {
	};
	_instance.onPresence = function () {
	};
	_instance.onTap = function () {
	};

	//convert spherical coordinates to cartesian coordinates
	_instance.sphericalToCartesian = function (azimuth, elevation, distance) {
		azimuth = azimuth * Math.PI * 2;
		elevation = elevation * Math.PI * 2;
		const x = distance * Math.cos(elevation) * Math.sin(azimuth);
		const y = distance * Math.sin(elevation) * Math.cos(azimuth);
		const z = distance * Math.cos(elevation) * Math.cos(azimuth);
		return {x: x, y: y, z: z};
	};


	return _instance;
}
