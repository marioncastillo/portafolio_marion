$(document).ready(function(){
	$("#mostrarvideo").click(function(e){
		$("#modal").addClass("#contenido-modal");
	});

	$("#cerrar-modal").on("click", function(){
		$("#modal").removeClass("#modal");
	});
})