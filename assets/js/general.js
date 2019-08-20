$(document).ready(function() {
	
	openVeloButton.click(function () {
		openVeloModal(veloModal);
	});

	closeVeloButton.click(function(){
        closeVeloModal(veloModal);
	});
});

var veloModal = $('#veloModal');
var openVeloButton = $('#openVeloButton');
var closeVeloButton = $('#closeVeloButton');

function openVeloModal(elem) {
	elem.removeClass("closedVeloModal").addClass("openedVeloModal");
}
function closeVeloModal(elem) {
	elem.removeClass("openedVeloModal").addClass("closedVeloModal");
}