function formatDecimal(val, n) {
    //funcion que nos permite mostrar el precio con solo 2 decimales
        n = n || 2;
        var str = "" + Math.round (parseFloat(val) * Math.pow(10, n));
        while (str.length <= n) {
        str = "0" + str;
        }
        var pt = str.length - n;
        return str.slice(0,pt) + "." + str.slice(pt);
        }
        function getRadioVal(form, name) {
        var radios = form.elements[name];
        var val;
        for (var i=0, len=radios.length; i<len; i++) {
        if (radios[i].checked == true) {
        val = radios[i].value;
        break;
        }
        }
        return val;
        }
        function getToppingsTotal(e) {
            //calculamos el subtotal de los productos extras
        var form = this.form;
        var val = parseFloat(form.elements['tops_tot'].value);
        if ( this.checked == true ) {
        val += parseFloat(this.value);
        } else {
        val -= parseFloat(this.value);
        }
        form.elements['tops_tot'].value = formatDecimal(val);
        updatepolloTotal(form);
        }
        //total del valor del pollo de acuerdo al tamaño
        function getSizePrice(e) {
        updatepolloTotal(this.form);
    }
    
    //funcion que nos permite calcular el total a pagar con todos los productos agregados y combo seleccionado
    function updatepolloTotal(form) {
    var cantidad = parseInt(document.getElementById('cantidad').value);
     
    var tops_tot = parseFloat(form.elements['tops_tot'].value);
    var prec= 3.55;
    form.elements['total'].value = formatDecimal( ( cantidad* prec) + tops_tot);
    
    }
        
    
    (function() {
    var form = document.getElementById('formulario');
    var el = document.getElementById('pelis_toppings');
    // determinar los productos seleccionados en las casillas de verificación
    //
    var tops = el.getElementsByTagName('input');
    for (var i=0, len=tops.length; i<len; i++) {
    if (tops[i].type === 'checkbox') {
    tops[i].onclick = getToppingsTotal;
    }
    }   
    updatepolloTotal(form);
    })();
    
    function recibo(){
        //funcion que nos genera el recibo y nos guarda en el localstorage 
        var cantidad = parseInt(document.getElementById('cantidad').value);
    var tops_tot = parseFloat(document.getElementById('tops_tot'));
    var totalp= tops_tot; 
    var seleccionado= document.getElementById('combo');
    document.write('<div class="title"><h3>Pedido</h3></div>');
    document.write('<p class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">'+ seleccionado +' </p>');
    document.write('<p class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms"> </p>');
    document.write('<div class="title"><h3>Total a <span>pagar</span></h3></div>');
    document.write('<p class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">'+ totalp +' </p>');
    document.write('<a href="index.html"><input type="submit"  class="btn btn-default pull-right wow bounceIn"  role="button" value="Regresar"  /></a>');
    
    
    var storedTextContainer = document.getElementById("webStorageStoredText");
    //Acceder al dato almacenado previamente con localStorage.
    var storedText = localStorage.getItem('webStorageTestInput');
    var inputBox = document.getElementById("cantidad");
    var producto = document.getElementById("producto");
    var saveBtn = document.getElementById("guardar");
    
     
    //Verificar si el dato almacenado en el objeto localStorage es nulo.
    if(storedText != null){
        //Si estamos aquí significa que existe un dato almacenado en localStorage.
        //Colocamos el datos almacenado en el elemento de la página con id storedTextContainer.
        storedTextContainer.innerHTML = "<strong>Dato cargado desde almacenamiento local:</strong> " + storedText;
        //Volver a cargar el dato almacenado en el campo de texto
        inputBox.value = storedText;
    }
     
    //Usamos el manejador de evento onclick sobre el botón Guardar para almacenar
    //el dato ingresado hasta el momento en el objeto localStorage.
    saveBtn.onclick = function(){
        //Before we save this data, let's escape it so you "hackers" out there don't try anything funny!
        var valueToSave =inputBox.value.replace(/<\/?[^>]+>/gi, '');
     
        //This is the way we store things in localStorage
        localStorage.setItem('webStorageTestInput',valueToSave);
     
        //Let the user know the text was saved.
        storedTextContainer.innerHTML = "Se ha almacenado correctamente '" + valueToSave + ".' Actualice la página para que observe que el dato almacenado es mostrado en el campo de formulario.";
    }
    

    

    


    }

    
    