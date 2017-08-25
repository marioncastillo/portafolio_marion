$(document).ready(function(){
	$("#mostrarvideo").click(function(e){
		$("#modal").addClass("#contenido-modal");
	});

	$("#cerrar-modal").on("click", function(){
		$("#modal").removeClass("#modal");
	});

	$("#icoport").click(function(e){
			e.preventDefault();
			window.location = "#web";
	});
		$("#icoportdos").click(function(e){
			e.preventDefault();
			window.location = "#video";
	});

		$("#icoporttres").click(function(e){
			e.preventDefault();
			window.location = "#fotografias";
	});

		$("#icoportcuatro").click(function(e){
			e.preventDefault();
			window.location = "#facilitacion";
	});
})