var termoImagen = document.getElementById('termoImagen');
var mateImagen = document.getElementById('mateImagen');
var termo = document.getElementById('termo');
var mate = document.getElementById('mate');
var agua_termo = document.getElementById('agua_termo');
var barra_mate = document.getElementById('barra_mate');
var barra_termo = document.getElementById('barra_termo'); // Barra del termo

// Sonidos
var sonidoLlenar = new Audio("audio/llenar.mp3"); // Sonido para llenar el mate
var sonidoTomar = new Audio("audio/tomar.mp3");   // Sonido para tomar el mate

// Flags
var mateCebado = false;
var enAnimacion = false;
var termoVacío = false;

// Controladores para las barras
var barraNivel = 0; // Barra del mate
var barraNivelTermo = 0; // Barra del termo

// Función para cambiar la imagen de la barra del mate
function bajarBarra() {
    if (barraNivel === 1) {
        barra_mate.src = "img/barra mate 3.png"; // Primera bajada
    } else if (barraNivel === 2) {
        barra_mate.src = "img/barra mate 4.png"; // Segunda bajada
    } else if (barraNivel === 3) {
        barra_mate.src = "img/barra mate 5.png"; // Tercera bajada
    } else if (barraNivel === 4) {
        barra_mate.src = "img/barra mate 6.png"; // Cuarta bajada 
    } else if (barraNivel === 5) {
        barra_mate.src = "img/barra mate 1.png";// Quinta bajada (última)
        mateImagen.src = "img/mate 1.png"; 
        mateCebado = false;
        barraNivel = 0;
    }
}

// Función para cambiar la imagen de la barra del termo
function bajarBarraTermo() {
    if (barraNivelTermo === 1) {
        barra_termo.src = "img/barra termo 2.png"; // Primera bajada
    } else if (barraNivelTermo === 2) {
        barra_termo.src = "img/barra termo 3.png"; // Segunda bajada
    } else if (barraNivelTermo === 3) {
        barra_termo.src = "img/barra termo 4.png"; // Tercera bajada
    } else if (barraNivelTermo === 4) {
        barra_termo.src = "img/barra termo 5.png"; // Cuarta bajada 
    } else if (barraNivelTermo === 5) {
        barra_termo.src = "img/barra termo 6.png"; // Quinta bajada 
    } else if (barraNivelTermo === 6) {
        barra_termo.src = "img/barra termo 7.png"; // Sexta bajada (última)
        termoVacío = true;
    }
}

// Evento del clic en el termo (para cebar el mate)
termo.addEventListener('click', function() {
    termo.classList.add('animar'); // Añadir animación al termo
    
    sonidoLlenar.play();

    // Animación del termo: en cuanto termine, bajar la barra del termo
    termo.addEventListener('animationend', function() {
        termo.classList.remove('animar'); // Remover la animación del termo

        // Cambiar la imagen del mate a cebado
        mateImagen.src = "img/mate 2.png"; 
        
        // Cambiar la imagen de la barra de agua del mate
        barra_mate.src = "img/barra mate 2.png"; // Barra llena

        mateCebado = true;

        // Hacer clickeable el mate después de que se cebó
        mate.style.cursor = 'pointer'; // Cambia el cursor para que el usuario vea que puede hacer clic


        
        barraNivelTermo++;
        bajarBarraTermo();  
        
        if (termoVacío === true) {
        
            termo.classList.add('rellenar');
            termo.addEventListener('animationend', function() {
                termo.classList.remove('rellenar'); // Eliminar la clase de animación
                barra_termo.src = "img/barra termo 1.png";
                barraNivelTermo = 0;
                termoVacío = false;
            }, { once: true });
        }
        
    }, { once: true });
});

// Evento del clic en el mate para bajar la barra
mate.addEventListener('click', function() {
    // Solo si el mate está cebado (ya que después de cebado cambia la imagen del mate)
    if (mateCebado === true) {
        

        
        // Añadir la animación de tomar al mate
        mate.classList.add('tomar'); // Añadir animación de tomar al mate

        sonidoTomar.play();

        // Una vez que la animación termine, eliminar la clase "tomar"
        mate.addEventListener('animationend', function() {
            mate.classList.remove('tomar'); // Remover la animación de tomar

            barraNivel++; // Incrementa el nivel del mate
            console.log("Nivel de barra del mate:", barraNivel);

            bajarBarra(); // Llama a la función para cambiar la imagen de la barra del mate

             
        }, { once: true }); // Asegura que solo se ejecute una vez y no se salteen mates
    }
});