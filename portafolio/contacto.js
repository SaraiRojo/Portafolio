$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const message = $('#message').val();

        if(name && email && phone && message) {
            alert('Mensaje enviado con éxito!');
            $('#contact-form')[0].reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});
