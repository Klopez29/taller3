var app = {};
var miCallback= datos =>{
    console.log(datos);
    app.peliculas = datos;
    var html = "";
    app.peliculas.map(peliculas=> {
    html+='    <div class="card">';
	html+='		<div class="row">';
	html+='			<div class="col-md-5 wrapthumbnail">';
	html+='			<a href="compra.html">';
	html+='				<div class="thumbnail" style="background-image:url('+ peliculas.img +');">';
	html+="					</div>";
	html+="				</a>";
	html+="			</div>";
	html+='		<div class="col-md-7">';
	html+='			<div class="card-block">';
	html+='					<h2 class="card-title"><a href="compra.html">'+ peliculas.titulo +'</a></h2>';
	html+='					<h4 class="card-text"> '+ peliculas.clasificacion + '</h4>';
	html+='					<h4 class="card-text"> '+ peliculas.butacas + '</h4>';
    html+='					<h4 class="card-text"> '+ peliculas.horarios + '</h4>';


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

    });
    document.getElementById("results").innerHTML = html;

}
