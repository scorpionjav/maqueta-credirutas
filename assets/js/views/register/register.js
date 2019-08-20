$(document).ready(function () {

	/*========================= Variables =========================*/
	var select_account = $('#registerSelectAccount');
	var pasajeros_account = $('#cuenta-pasajeros');
	var afiliados_account_list = $('ul.afiliados-type');
	var linkChangeSelection = $('a.changeSelection');
	var registerChangeSelection = $('a.changeSelectionRegister');
	var afiliadosNormal = $('#afiliados-normal');
	var afiliadosOpacity = $('#afiliados-opacity');
	var preRegister = $('.preRegister');
	var showRegister = $('.showRegister');
	var rhi = $('#registerHowImg');
	var ihi = $('#idHowImg');
	var idLabel = $('#labelId');
	var bUCedula = $('#beforeUploadCedula');
	var aUCedula = $('#afterUploadCedula');
	var btnUploadCedula = $('.uploadCedula');
	var veloModal = $('#veloModal');
	var categoryService = $('.categoryService');
	var servicesType = $('.servicesType');
	var iconCategoryService = $('a.icon-category-service');
	var changeService = $('a.changeService');
	var iconService = $('a.icon-service');
	var step1ButtonsPas = $('#step1 .panelButtonsSteps');
	var step3Buttons = $('#step3 .panelButtonsSteps');

	/*========================= Methods =========================*/
	$('a.account-type-icon').click(function (e) {
		e.preventDefault();
		var tipoCuenta = $(this).data();
		switch (tipoCuenta.id) {
			case 'cuenta-afiliados':
				showAfiliadosType(veloModal);
				break;
			case 'cuenta-pasajeros':
				hidePreRegister(preRegister);
				showRegisterArea(rhi, showRegister, tipoCuenta, ihi, idLabel);
				resizeStepsPas(step1ButtonsPas);
				break;
			case 'cuenta-afiliado-natural':
				hidePreRegister(preRegister);
				showRegisterArea(rhi, showRegister, tipoCuenta, ihi, idLabel);
				closeVeloModal(veloModal);
				break;
			case 'cuenta-afiliado-juridica':
				hidePreRegister(preRegister);
				showRegisterArea(rhi, showRegister, tipoCuenta, ihi, idLabel);
				closeVeloModal(veloModal);
				break;
		}
	});

	iconCategoryService.click(function (e) {
		e.preventDefault();
		var categoryType = $(this).data();
		switch (categoryType.id) {
			case 'Maritimo':
				showServices(changeService, categoryService, servicesType, categoryType, step3Buttons);
				break;
			case 'Terrestre':
				showServices(changeService, categoryService, servicesType, categoryType, step3Buttons);
				break;
			case 'Aereo':
				showServices(changeService, categoryService, servicesType, categoryType, step3Buttons);
				break;

		}
	});


	iconService.click(function (e) {
		e.preventDefault();
		var actualService = $(this);
		var imgActualService;
		var i;
		for (i = 0; i <= iconService.length; i++) {
			if (actualService.hasClass('serviceNotActive')) {
				actualService.removeClass('serviceNotActive');
				actualService.find('.serviceNormal').removeClass('serviceImgOp');
				/*actualService.find('.serviceOpacity').addClass('d-none');*/
			} else {
				for (i = 0; i <= iconService.length; i++) {
					imgActualService = iconService.not(actualService).addClass('serviceNotActive');
					imgActualService.find('.serviceNormal').addClass('serviceImgOp');
					/*imgActualService.find('.serviceOpacity').removeClass('d-none');*/
				}
			}
		}
	});

	linkChangeSelection.click(function () {
		backToSelectAccount(linkChangeSelection, select_account);
	});

	registerChangeSelection.click(function (e) {
		e.preventDefault();
		backToSelectFromRegister(showRegister, preRegister);
		step1ButtonsPas.removeClass('passengerStepsButtons');
	});

	btnUploadCedula.click(function () {
		uploadCedula();
	});

	changeService.click(function (e) {
		e.preventDefault();
		hideServices(changeService, categoryService, servicesType, step3Buttons);
		iconService.removeClass('serviceNotActive');

	});

	//Wizard Form
	$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
		var $target = $(e.target);
		if ($target.parent().hasClass('disabled')) {
			return false;
		}
	});

	$(".next-step").click(function (e) {
		var $active = $('.nav-tabs li>a.active');
		$active.parent().next().removeClass('disableNextLi');
		nextTab($active);
	});

	$(".prev-step").click(function (e) {
		var $active = $('.nav-tabs li>a.active');
		prevTab($active);
	});
}); /*  end document ready*/

/*functions*/
function showAfiliadosType(elem) {
	elem.removeClass("closedVeloModal").addClass("openedVeloModal");
}

function hidePreRegister(elem) {
	elem.addClass('d-none');
}

function showRegisterArea(rhi, showRegister, obj, ihi, idLabel) {
	rhi.attr('src', obj.iconImg);
	ihi.attr('src', obj.idImg);
	idLabel.text(obj.label);
	$('#select' + obj.select).removeClass('d-none');
	showRegister.removeClass('d-none');

}

function backToSelectAccount(linkChangeSelection, select_account) {
	linkChangeSelection.addClass('d-none');
	select_account.addClass('py-5');
}

function backToSelectFromRegister(showRegister, preRegister) {
	showRegister.addClass('d-none');
	preRegister.removeClass('d-none');
	$('.selectId').addClass('d-none');
}

function uploadCedula() {
	bUCedula.addClass('d-none');
	aUCedula.removeClass('d-none');
}

function showServices(linkChange, containerCategory, servicesType, obj, step3Buttons) {
	linkChange.removeClass('d-none');
	containerCategory.addClass('d-none');
	servicesType.removeClass('d-none');
	step3Buttons.removeClass('categoryStepsButtons').addClass('servicesStepsButtons');
}
function hideServices(linkChange, containerCategory, servicesType, step3Buttons) {
	linkChange.addClass('d-none');
	containerCategory.removeClass('d-none');
	servicesType.addClass('d-none');
	step3Buttons.addClass('categoryStepsButtons').removeClass('servicesStepsButtons');
}

function resizeStepsPas(step1ButtonsPas) {
	step1ButtonsPas.addClass('passengerStepsButtons');
}

function nextTab(elem) {
	$(elem).parent().next().find('a[data-toggle="tab"]').click();

}
function prevTab(elem) {
	$(elem).parent().prev().find('a[data-toggle="tab"]').click();
}
