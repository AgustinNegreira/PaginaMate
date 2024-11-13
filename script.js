var termoImagen = document.getElementById('termoImagen');
var mate = document.getElementById('mateImagen');
var objeto1 = document.getElementById('termo');
var objeto2 = document.getElementById('mate');
var barra1 = document.getElementById('agua-termp');
var barra2 = document.getElementById('agua-mate');
var audio = new Audio("audio\sonido.mp3");

termo.addEventListener('click', function() {
objeto1.classList.add('animar');objeto1.addEventListener('animationend', function() {
objeto1.classList.remove('animar');
});
});