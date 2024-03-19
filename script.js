document.addEventListener('DOMContentLoaded', function() {
    var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
    console.log(lang);
    fetch('translations/' + lang + '.json')
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-translate]').forEach(element => {
                var key = element.getAttribute('data-translate');
                if (data[key]) {
                    element.textContent = data[key];
                }
            });
        })
        .catch(error => {
            console.error('Error loading translations:', error);
        });
});
