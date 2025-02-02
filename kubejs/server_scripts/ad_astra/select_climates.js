TFCEvents.selectClimateModel(event => {

	let location = event.level.dimensionKey.location();

	switch (location) {

		case 'ad_astra:moon':
			event.setModel('tfg:moon_climate');
			break;

		case 'ad_astra:mars':
			event.setModel('tfg:mars_climate');
			break;

		case 'ad_astra:earth_orbit':
		case 'ad_astra:moon_orbit':
		case 'ad_astra:mars_orbit':
			event.setModel('tfg:orbit_climate');
			break;
	}
})