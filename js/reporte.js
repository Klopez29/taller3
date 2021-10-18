/*Funcion Cargar y Mostrar datos*/

$(document).ready(function(){    
    $('#boton-cargar').click(function(){                       
        /*Obtener datos almacenados*/
        var cantidad = localStorage.getItem("cantidad");
        var producto = localStorage.getItem("producto");
        /*Mostrar datos almacenados*/  
        var html = "";    
        html+='    <div class="card">';
	html+='		<div class="row">';
	html+='			<div class="col-md-5 wrapthumbnail">';
	html+='			<a href="index">';
	html+='				<div class="thumbnail" style="background-image:url('+ producto+');">';
	html+="					</div>";
	html+="				</a>";
	html+="			</div>";
	html+='		<div class="col-md-7">';
	html+='			<div class="card-block">';
	html+='					<h2 class="card-title"><a href="index.html">Cantidad de tickets '+cantidad +'</a></h2>';


    html+='				<div class="metafooter">';
	html+='						<div class="wrapfooter">';
	html+='							<span class="meta-footer-thumb">';
	html+="							</span>";
	html+="						</div>";
	html+="					</div>";
	html+="				</div>";
	html+="			</div>";
	html+="		</div>";
	html+='	</div>';
    document.getElementById("results").innerHTML = html;
    
    });   
});

