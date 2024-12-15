var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
// Comentario
typewriter.typeString('Ingeniería Industrial')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Mejorar es cambiar')
    .pauseFor(2500)
    // número de caracteres que borran
    .deleteChars(7)
    .typeString('<strong>CAMBIAR</strong>')
    .pauseFor(2500)
    .start();