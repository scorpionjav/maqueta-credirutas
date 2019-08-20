$(document).ready(function() {

	/*========================= Variables =========================*/
	var infoPasajero = $('#infoPassenger');
	var imgPasajero = $('#passenger');
	var infoAfiliado = $('#infoAffiliate');
	var imgAfiliado = $('#affiliate');

	/*========================= Methods =========================*/
	imgPasajero.click(function () {
		if (infoPasajero.hasClass('unVisible')) {
			showInfoDiagram(infoPasajero, 'left');
			infoPasajero.removeClass('unVisible');
		} else {
			hideInfoDiagram(infoPasajero, 'left');
			infoPasajero.addClass('unVisible');
		}
	});

	imgAfiliado.click(function () {
		if (infoAfiliado.hasClass('unVisible')) {
			showInfoDiagram(infoAfiliado, 'right');
			infoAfiliado.removeClass('unVisible');
		} else {
			hideInfoDiagram(infoAfiliado, 'right');
			infoAfiliado.addClass('unVisible');
		}
	});

	$('#fullpage').fullpage({
		responsiveWidth: 760
	});

});

function showInfoDiagram(info, position) {
	info.css(position, '0');
}
function hideInfoDiagram(info, position) {
	info.css(position, '-100%');
}






