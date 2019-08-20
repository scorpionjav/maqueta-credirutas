$(document).ready(function () {

	/*========================= Variables =========================*/
	var lHI = $('#loginHowImg');
	var textLoginTop = $('.loginRowTop h5 span');
	var containerLogin = $('.containerLogin');
	var containerPreLogin = $('.containerPreLogin');
	var labelLoginUser = $('.labelLoginUser');
	var addonText = $('.addon-text');
	var selectCedula = $('#selectCedula');
	var selectRif = $('#selectRif');
	var veloModal = $('#veloModal');
	var loginHide = $('.loginHide');
	var containerRecoveryPassword = $('#containerRecoveryPassword');
	var containerRPText = $('#containerRecoveryPassword p');
	var loginLinkBack = $('#loginLinkBack');
	var linkForgotPassword = $('#forgotPassword');
	var forgotPasswordUserLabel = $('#forgotPasswordUserLabel');
	var loginLinkBackPassword = $('#loginLinkBackPassword');
	var btnContinuePassword = $('.btnContinuePassword');
	var recoveryPasswordStep1 = $('#recoveryPasswordStep1');
	var recoveryPasswordStep2 = $('#recoveryPasswordStep2');
	var passwordStep2LinkBack = $('#recoveryPasswordStep2 #loginLinkBackPassword');
	var effRotateY = $('.effRotateY');

	/*========================= Methods =========================*/
	$('.loginPanel.zoomOut').removeClass('zoomOut').addClass('zoomIn');

	/*Load Form*/
	$('a.account-type-icon').click(function () {
		var tipoCuenta = $(this).data();
		switch (tipoCuenta.id) {
			case 'cuenta-admin':
				lHI.attr('src', tipoCuenta.iconImg);
				labelLoginUser.text('Cédula de identidad');
				addonText.hide();
				selectCedula.removeClass('d-none');
				selectRif.addClass('d-none');
				containerPreLogin.addClass("d-none");
				containerLogin.removeClass("d-none");
				linkForgotPassword.attr('data-user-label', 'Cédula de Identidad');
				break;
			case 'cuenta-afiliados':
				openVeloModal(veloModal);
				break;
			case 'cuenta-pasajeros':
				lHI.attr('src', tipoCuenta.iconImg);
				labelLoginUser.text('IDT');
				selectCedula.addClass('d-none');
				selectRif.addClass('d-none');
				addonText.text('IDT');
				addonText.addClass('bg-blue');
				addonText.show();
				containerPreLogin.addClass("d-none");
				containerLogin.removeClass("d-none");
				linkForgotPassword.attr("data-user-label", "IDT");
				break;
			case 'cuenta-afiliado-natural':
				lHI.attr('src', tipoCuenta.iconImg);
				labelLoginUser.text('IDT');
				addonText.text('IDT');
				addonText.addClass('bg-blue');
				addonText.show();
				selectCedula.addClass('d-none');
				selectRif.addClass('d-none');
				containerPreLogin.addClass("d-none");
				containerLogin.removeClass("d-none");
				//veloModal.removeClass("openedVeloModal").addClass("closedVeloModal");
				closeVeloModal(veloModal);
				linkForgotPassword.attr("data-user-label", "IDT");
				break;
			case 'cuenta-afiliado-juridica':
				lHI.attr('src', tipoCuenta.iconImg);
				labelLoginUser.text('Rif');
				addonText.hide();
				selectCedula.addClass('d-none');
				selectRif.removeClass('d-none');
				containerPreLogin.addClass("d-none");
				containerLogin.removeClass("d-none");
				veloModal.removeClass("openedVeloModal").addClass("closedVeloModal");
				linkForgotPassword.attr("data-user-label", "Rif");
				break;
		}
	});



	/* login link back */
	loginLinkBack.click(function () {
		containerPreLogin.removeClass("d-none");
		containerLogin.addClass("d-none");
		rotateYPrev(containerPreLogin);
	});

	/* login link back from password*/
	loginLinkBackPassword.click(function () {
		loginLinkBack.removeClass("d-none");
		//containerPreLogin.removeClass("d-none");
		//containerLogin.addClass("d-none");
		containerRecoveryPassword.addClass("d-none");
		loginHide.removeClass('d-none');
		textLoginTop.text('Estas iniciando sesion como:');
		textLoginTop.removeClass("bg-blue");
		textLoginTop.addClass("bg-yellow");
		rotateYPrev(effRotateY);
	});

	/* forgot password link */
	linkForgotPassword.click(function () {
		loginLinkBack.addClass("d-none");
		containerRecoveryPassword.removeClass("d-none");
		textLoginTop.removeClass("bg-yellow");
		textLoginTop.addClass("bg-blue");
		textLoginTop.text('Recuperar Contrasena');
		loginHide.addClass('d-none');
		containerRecoveryPassword.removeClass('d-none');
		forgotPasswordUserLabel.text(linkForgotPassword.attr("data-user-label"));
		rotateYNext(effRotateY);
	});
	/* continue recovery password */
	btnContinuePassword.click(function () {
		recoveryPasswordStep1.addClass('d-none');
		recoveryPasswordStep2.removeClass('d-none');
		passwordStep2LinkBack.removeClass('d-inline-block');
		passwordStep2LinkBack.addClass('d-none');
		containerRPText.text('Por favor ingrese su nueva contrasena');
		rotateYNext(effRotateY);
	});
});

function rotateYNext(elem) {
	elem.addClass('rotateYNext');
	setTimeout(function () {
		elem.removeClass('rotateYNext');
	}, 500);
}
function rotateYPrev(elem) {
	elem.addClass('rotateYPrev');
	setTimeout(function () {
		elem.removeClass('rotateYPrev');
	}, 500);
}